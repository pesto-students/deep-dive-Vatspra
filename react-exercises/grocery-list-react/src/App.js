import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GroceryList } from '../src/components/grocery-list/grocery-list.components';
import { AddGroceryForm } from './components/add-grocery/add-grocery.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      groceryList: [
        { name: 'Basmati Rice', count: 1, color: 'black' },
        { name: 'Butter', count: 1, color: 'black' },
        { name: 'Milk', count: 1, color: 'black' },
        { name: 'Curd', count: 1, color: 'black' },
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearList = this.clearList.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const  groceryList  = this.state.groceryList.slice();
    const newGrocery = this.state.value.trim();
    let isNewItem = true;
    if (newGrocery) {
      for (const grocery of groceryList) {
        if (grocery.name.toLowerCase() === newGrocery.toLowerCase()) {
          grocery.count = grocery.count + 1;
          isNewItem = false;
        }
      }
      if (isNewItem) {
        const obj = { name: newGrocery, count: 1 };
        groceryList.push(obj);
      }
      this.setState({ groceryList: groceryList });
    }
    event.preventDefault();
  }

  clearList() {
    this.setState({ groceryList: [] });
    return;
  }


  updateColor(item) {
    const { groceryList } = this.state;
    const newList = groceryList.map(grocery => {
      if (item.name.toLowerCase() === grocery.name.toLowerCase()) {
        grocery.color === 'red' ? grocery.color = 'black' : grocery.color = 'red';
      }
      return grocery;
    });
    this.setState({ groceryList: newList });
  }

  render() {
    return (
      <div>
        <AddGroceryForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}
        />
        <GroceryList groceries={this.state.groceryList} onDelete={this.clearList} updateColor={this.updateColor} />
      </div>
    );
  }
}

export default App;
