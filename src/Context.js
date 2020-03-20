import React, { Component } from 'react'
import {storeProducts,detailProduct} from "./data";
//Provider // Consumer

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
    return valid;
  };
const ProductContext= React.createContext();

class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        users:[],
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        fireRedirect:false,
        formErrors: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            subject: ""
        },
        fireRedirect2:false,
        isLoged:false,
        subject:null,
        contectInfo:[]
    }

    componentDidMount(){
        this.setProducts();
    }

    //Product List
    setProducts=()=>{
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }
    getItem = id =>{
       const product = this.state.products.find(item => item.id === id);
       return product;
    }

    //Products
    handelDetail = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product};
        })
    }

    //Model
    openModal = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })
    }
    closeModal = () =>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }

    
    //Cart
    addToCart = id =>{
      let tempProducts = [...this.state.products];
      let tempUsers = [...this.state.users]
      let index = tempProducts.indexOf(this.getItem(id));
      let product = tempProducts[index];
      console.log(tempUsers)
      product.inCart = true;
      product.count=1;
      const price = product.price;
      product.total = price;
      let tempUser = tempUsers.find(user=> user.isLoged === true)
      tempUser.cart.push(product)
      this.setState(()=>{return {products:tempProducts,cart:[...this.state.cart,product],users:tempUsers}},()=>{this.addTotals()},()=>console.log(this.state))
  }

    increment = (id) =>{
        let tempCart= [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count +=1;
        product.total = product.count * product.price;
        this.setState(()=>{
            return {cart:[...tempCart]}
        },
        ()=>{
            this.addTotals();
        })
    }
    decrement = (id) =>{
        let tempCart= [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count -=1;
        product.total = product.count * product.price;
        if(product.count === 0){
            this.removeItem(id);
        }
        else{
          this.setState(()=>{
              return {cart:[...tempCart]}
           },
           ()=>{
              this.addTotals();
           })
        }
    }
    removeItem = (id) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        let tempUsers = [...this.state.users]

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        let tempUser = tempUsers.find(user=> user.isLoged === true)
        tempUser.cart = [...tempCart]
        this.setState(()=>{
            return {cart:[...tempCart], products:[...tempProducts]}
        },
        ()=>{
            this.addTotals();
        })
    }
    clearCart = () =>{
      let tempUsers = [...this.state.users]
      let tempUser = tempUsers.find(user=> user.isLoged === true)
        tempUser.cart = []
        this.setState(()=>{
            return {cart:[]}
        },
        ()=>{
            this.setProducts();
        },console.log(this.state))
    }
    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item=>{ 
            subTotal += item.total
            return subTotal 
        })
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return {cartSubTotal:subTotal, cartTax:tax, cartTotal:total}
        })
    }

    
  //Sign Up   
  handleSubmit = e => {
    e.preventDefault();    
    if (formValid(this.state)) {
      console.log(`
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      let i = 0
      this.state.users.push({
        id:1000+i,
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        email:this.state.email,
        password:this.state.password,
        cart:[],
        isLoged:true
      },console.log(this.state,this.state.users)) 
      this.setState ({ fireRedirect: true ,firstName:null,lastName:null,email:null,password:null},console.log(this.state.users))
      i++
      alert("Account Sucssfully Created!")
    } else {
      alert("Error! Cant Create Account, Please Fill The Form As Needed");
    }
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? "Minimum 2 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "Minimum 2 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 8 ? "Minimum 8 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };


  //Sign In
  logHandleSubmit = (e,props) => {
    e.preventDefault();
    Object.values(props.users).forEach(value=>{
      let i = 0
      if(value[i].email === this.state.email && value[i].password === this.state.password){
        console.log(`Email: ${this.state.email} Password: ${this.state.password}`);
        this.setState({fireRedirect2: true,isLoged:true,fireRedirect:false},console.log(this.state))
        alert("Sucssfully Loged In!")
      }
      else if (value[i].email !== this.state.email && value[i].password !== this.state.password){
        alert("Worng Account Details!")
      }
      i++
    })
    }
  logHandleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  //Page
  handelPage = () => {
    this.setState({fireRedirect:false})
  }

  handelPage2 = () => {
    this.setState({fireRedirect2:false})
  }

  //Log Out
  handelLogOut = e =>{
    e.preventDefault();
    console.log(this.state.isLoged)
    this.setState({isLoged:false,fireRedirect:false,fireRedirect2:false})
    console.log(this.state.isLoged)

  }

  //Cotect
  handelContectChange = e =>{
    e.preventDefault();
    const { name, value } = e.target;  
    this.setState({ [name]: value },console.log(this.state));
  }

  handleContectSubmit = e =>{
    const {fName,lName,email} = this.state
    e.preventDefault();
    console.log(e)
    if (fName !== null && lName !== null && emailRegex.test(email)) {
      console.log(`
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Subject: ${this.state.subject}
      `);
      let i = 0
      this.state.contectInfo.push({
        id:i,
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        email:this.state.email,
        subject:this.state.password,
      },console.log(this.state,this.state.contectInfo)) 
      this.setState ({fireRedirect:true,firstName:null,lastName:null,email:null,password:null},console.log(this.state.users))
      i++
      alert("We Got You'r Message And Will Replay As Soon As Posible!")
    }
    else{
      alert("Error! Chack If You Filld The Form Corectly!")
  }
}
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handelDetail:this.handelDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart,
                handleSubmit:this.handleSubmit,
                handleChange:this.handleChange,
                logHandleChange:this.logHandleChange,
                logHandleSubmit:this.logHandleSubmit,
                handelLogOut:this.handelLogOut,
                handelPage:this.handelPage,
                handelPage2:this.handelPage2,
                handelContectChange:this.handelContectChange,
                handleContectSubmit:this.handleContectSubmit
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsomer = ProductContext.Consumer

export {ProductProvider,ProductConsomer};