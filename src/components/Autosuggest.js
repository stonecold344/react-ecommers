// import React,{Component} from "react"
// import Autosuggest from 'react-autosuggest'
// import {storeProducts} from "../data"




// export default class Example extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: '',
//       suggestions: []
//     };
//   }

  
//   onChange = (event, { newValue }) => {
//     this.setState({
//       value: newValue
//     });
//     console.log(event)
//   };

//   getSuggestions = (value) => {
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;
//     return inputLength === 0 ? [] : storeProducts.filter(item =>
//       item.title.toLowerCase().slice(0, inputLength) === inputValue
//     );
//   };
  
//   getSuggestionValue = (suggestion) => suggestion.title;
  
//   renderSuggestion = (suggestion) => (
//       <div>
//       {suggestion.title}
//       </div>
      
//   );

//   onSuggestionsFetchRequested = ({ value }) => {
//     this.setState({
//       suggestions: this.getSuggestions(value)
//     });
//   };

//   onSuggestionsClearRequested = () => {
//     this.setState({
//       suggestions: []
//     });
//   };

//   render() {
//     const { value, suggestions } = this.state;
//     const inputProps = {
//       placeholder: 'Enter Input',
//       value,
//       onChange: this.onChange
//     };
//     console.log(value)
//     return (
//     <React.Fragment>
//       <Autosuggest
//         suggestions={suggestions}
//         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//         getSuggestionValue={this.getSuggestionValue}
//         renderSuggestion={this.renderSuggestion}
//         inputProps={inputProps}
//       />
      
//      </React.Fragment>
//     );
//   }
// }