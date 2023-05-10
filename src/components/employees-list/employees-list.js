import EmployeeListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'


const EmployeeList = ({data, onDelete, onClickIncrease, onClickFavorite}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployeeListItem 
                key = {id}
                onDelete = {() => onDelete(id)}
                onClickFavorite = {() => onClickFavorite(id)}
                onClickIncrease = {() => onClickIncrease(id)}
                {...itemProps}/>
        );
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeeList;