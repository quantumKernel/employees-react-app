import './employees-list-item.css'
import {Component} from 'react';

class EmployeeListItem extends Component () {
    constructor (props) {
        super(props);
        //no actions above eslint says that this contructor is useless but fo educational reason i'll left it
    };
    render (){
        const {name, salary, increase} = this.props;
        return(
            <li className={"list-group-item d-flex justify-content-between" + (increase? ' increase' : '')}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fa-solid fa-star"></i>
            </div>
        </li>
        );
    };
};

export default EmployeeListItem;