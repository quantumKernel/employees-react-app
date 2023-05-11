import EmployeeListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'


const EmployeeList = ({data, onDelete, onToggleProp, onValueChange}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployeeListItem 
                key = {id}
                onDelete = {() => onDelete(id)}
                onValueChange = {(e) => onValueChange(id, e.currentTarget.value)}
                onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
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