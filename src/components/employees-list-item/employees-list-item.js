import './employees-list-item.css'
import {Component} from 'react';

class EmployeeListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            years: 27,
            hasCookies: false,
            favorite:false
        }
    };

    giveCookie = () => {
        this.setState(({hasCookies}) => ({hasCookies : !hasCookies}));
    };

    makeFavorite = () => {
        this.setState(({favorite}) => ({favorite : !favorite}));
    };

    render (){
        const {name, salary} = this.props;
        const {hasCookies, years, favorite} = this.state;
        return(
            <li className={"list-group-item d-flex justify-content-between" + (hasCookies? ' increase' : '') + (favorite? ' like' : '')}>
            <span className="list-group-item-label"
                    onClick={this.makeFavorite}>{name+' '+years+' y.o.'}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={this.giveCookie}>
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