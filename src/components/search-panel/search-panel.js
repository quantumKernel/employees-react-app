
import './search-panel.css';

const SearchPanel = () => {
    return (
        <input 
            type="text" 
            className="form-control search-field"
            placeholder="Start typing to find employees..."
        />
    );
};

export default SearchPanel;