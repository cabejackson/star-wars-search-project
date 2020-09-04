import React from "react";
import PropTypes from 'prop-types';

// SearchFilter.prototype = {
//     input: PropTypes.string,
// }
//where does userinput come from in --> this.props.onSubmit(e.target.userInput.value)}

export default class SearchFilter extends React.Component {
    onSubmitForm = (e) => {
        console.log('This FORM has been submitted from search filter')
        e.preventDefault();
        this.props.onSubmit(e.target.userInput.value)}
    
    
    
        render() {
    return (
    <form className="searchInput" onSubmit={this.onSubmitForm}>
        <h2>Let's Search the Galaxies</h2>
        <label htmlFor="characterName">Enter a Character Name:
            <input type="text" id="characterName" name="userInput" />
            <button id="btn" type="submit">Submit</button>
        </label>
    </form>
    );
  }
}