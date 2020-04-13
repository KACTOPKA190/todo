// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import './components/todolist';

import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      userInputData: "",
      userInputTime: "",
      userName: "",
      list: []
    };
  }



  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  changeUserInputData(input) {
    this.setState({
      userInputData: input
    });
  }

  changeUserInputTime(input) {
    this.setState({
      userInputTime: input
    });
  }

  onInputChange(name, e) {
    this.setState({
      [name]: e.target.value
    });
  }

  

  addToList() {
    //let listArray = this.state.list;

    //listArray.push(this.state.userInput);

    this.setState({
      list: [
        ...this.state.list,
        { text: this.state.userInput,name: this.state.userName, date: this.state.userInputData, time: this.state.userInputTime }
      ],
      userInput: "",
      userInputData: "",
      userInputTime: "",
      userName:""
    });
  }

  render() {
    return (
    
      <div className="todo-list">
        
        <form>
          <input
            onChange={event => this.onInputChange("userInput", event)}
            /*  e.target.value
                            e = событие
                            target = элемент откуда пришло это событие
                            value = значение, находящиеся в этом элементе 
                        */
            value={this.state.userInput}
            type="text"
          />
          <input
            onChange = {event => this.onInputChange("userInputData", event)}
            value={this.state.userInputData}
            type="date"
          />
          <input
            onChange = {event => this.onInputChange("userInputTime", event)}
            value={this.state.userInputTime}
            type="time"
          />
        </form>
        <button onClick={() => this.addToList()}>Добавить</button>
        <ul>
          {this.state.list.map(val => (
            <li>
            <div className="ob">
              <div class="circle">
                <div class="child">
                </div>  
              </div>
              <div class="list-item">
                <div class="heading">
                  <span class="head-list">{`${val.text}`}</span>
                  <span class="data-list">{`${val.time}`}</span>
                </div>
                <div>
                <p className="op">Check the business plan</p>
                </div>
              </div> 
            </div>
          </li>))}
        </ul>
          
      </div>
    );
  }
}

ReactDOM.render(<ToDoList />, document.getElementById("root"));
