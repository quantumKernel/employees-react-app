import { Component } from 'react';

import './employees-list-item.css'

class EmployeeListItem extends Component {
    
    render() {
        const {name, salary, onDelete, onToggleProp, onValueChange, hasCookies, favorite} = this.props;
    
        return(
            <li className={"list-group-item d-flex justify-content-between" + (hasCookies? ' increase' : '') + (favorite? ' like' : '')}>
            <span className="list-group-item-label"
                  onClick={onToggleProp}
                  data-toggle="favorite"
            >
                {name}
            </span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'}
                onChange={onValueChange}
                />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="hasCookies">
                    <i className="fas fa-cookie"></i>
                </button>
    
                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fa-solid fa-star"></i>
            </div>
        </li>
        );
    }
    
};

export default EmployeeListItem;