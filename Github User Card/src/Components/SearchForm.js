import React from 'react'
import './SearchForm.css'

class SearchForm extends React.Component {
    render() {
        return(
            <div className="form-container">
                <form onSubmit={this.props.onSubmit}>
                    <label>Username: </label>
                    <input type='text' name='searchField' value={this.props.searchField} onChange={this.props.onChange} placeholder='Username' />
                    <button type='submit'>Go</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;