import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';


function App(){

    const data = [
        {name: 'John', salary: '300', increase: true, id:1},
        {name: 'Alex', salary: '450', increase: false, id:2},
        {name: 'Micke', salary: '700', increase: true, id:3},
        {name: 'Alice', salary: '945', increase: false, id:4}
    ];
    return(
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">

                <SearchPanel/>
                <AppFilter/>

            </div>

            <EmployeeList data={data}/>
            <EmployeeAddForm/>

        </div>
    );
}

export default App;