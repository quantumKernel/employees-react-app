import './employees-list-item.css'

const EmployeeListItem = (props) => {
    const {name, salary, onDelete, onToggleProp, hasCookies, favorite, years} = props;
        
    return(
        <li className={"list-group-item d-flex justify-content-between" + (hasCookies? ' increase' : '') + (favorite? ' like' : '')}>
        <span className="list-group-item-label"
              onClick={onToggleProp}
              data-toggle="favorite"
        >
            {name+' '+years+' y.o.'}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
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
    
};

export default EmployeeListItem;