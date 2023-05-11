import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input 
                type="text" 
                className="form-control search-field"
                placeholder="Start typing to find employees..."
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        );
    }
};

export default SearchPanel;