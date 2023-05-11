import './app-filter.css'

const AppFilter = (props) => {

    const btnsData = [
        {name: 'all', label: 'All employees'},
        {name: 'favorite', label: 'Growing employees'},
        {name: 'salary', label: 'Salary more then 1000$'}
    ]
    
    const buttons = btnsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        
        return (
            <button 
            className={`btn ${clazz}`}
            type='button'
            key={name}
            onClick={() => props.onToggleFilter(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
           {buttons}
        </div>
    );
};

export default AppFilter;