import React from 'react';

class SearchBar extends React.Component {
  state = { term: '', onSubmit: null };

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.term);
    }
  }

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Search: </label>
            <input 
              id="search" 
              type="text" 
              value={this.state.term} 
              onChange={e => this.setState({term: e.target.value})} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;