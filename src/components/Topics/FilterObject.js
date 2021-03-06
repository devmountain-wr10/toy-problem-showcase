import React, {Component} from 'react'

class FilterObject extends Component {
    constructor () {
        super()
        this.state= {

            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],

            userInput: '',

            filteredEmployees: []
        }
    }

    handleChange(val){
        this.setState({userInput : val})
    }

    filterEmployees(key){
        let employees = this.state.employees
        let filteredEmployeesArr = []

        for (let i =0 ; i < employees.length ; i++){
            if( employees[i].hasOwnProperty( key ) ){
                filteredEmployeesArr.push(employees[i])
            }
        }
        this.setState({filteredEmployees : filteredEmployeesArr})
    }
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {this.state.employees}</span>
                <button></button>
            </div>
        )
    }
}

export default FilterObject