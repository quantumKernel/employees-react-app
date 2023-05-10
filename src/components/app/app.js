
import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data : [
                {name: 'John', salary: '300', id:1, hasCookies:false, favorite:false},
                {name: 'Alex', salary: '450', id:2, hasCookies:false, favorite:false},
                {name: 'Micke', salary: '700', id:3, hasCookies:true, favorite:false},
                {name: 'Alice', salary: '945', id:4, hasCookies:false, favorite:false}
            ],
        }
    };

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id  !== id)
            }
        });
    };

    addItem = (name, salary) => {
        if (name.length >3 && salary) {
            this.setState(({data}) => {
                let newEmployee = {
                    name: name,
                    salary: salary,
                    hasCookies: false,
                    favorite: false,
                    id:Object.keys(this.state.data).length+1
                }
                return {
                    data: [...data,  newEmployee],
                }
            });
        }
    }

    onToggleProp = (id, propName) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        [propName]: !item[propName]
                    }
                }
                return item;
            })
        }));
    }

    onClickFavorite = (id) => {

        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        favorite: !item.favorite
                    }
                }
                return item;
            })
        }));

    }

    render () {
        return(
            <div className='app'>
                <AppInfo 
                    number={this.state.data.length}
                    hasCookiesNumber= {this.state.data.filter(item => item.hasCookies).length}
                />
    
                <div className="search-panel">
    
                    <SearchPanel/>  
                    <AppFilter/>
    
                </div>
    
                <EmployeeList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeeAddForm
                    onAdd={this.addItem}
                />
    
            </div>
        );
    };
}

export default App;