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
      groceries: [
        { name: 'Basmati Rice', count: 1, color: 'black' },
        { name: 'Butter', count: 1, color: 'black' },
        { name: 'Milk', count: 1, color: 'black' },
        { name: 'Curd', count: 1, color: 'black' },
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateColor = this.updateColor.bind(this);
    // this.removeSingleItem = this.removeSingleItem.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let { groceries } = this.state;
    const newGrocery = this.state.value.trim();
    let isNewitem = true;
    if (newGrocery) {
      for (const grocery of groceries) {
        if (grocery.name.toLocaleLowerCase() === newGrocery.toLowerCase()) {
          grocery.count = grocery.count + 1;
          isNewitem = false;
        }
      }
      if (isNewitem) {
        const obj = { name: newGrocery, count: 1 };
        groceries.push(obj);
      }
      this.setState({ groceries: groceries });
    }
    event.preventDefault();
  }

  removeItem() {
    // if (!item) {
    this.setState({ groceries: [] });
    return;
    // }
    // this.removeSingleItem(item);
    // event.preventDefault();
    // event.stopPropagation();
    // console.log(event)
  }

  // removeSingleItem(event, item) {
  //   console.log('hii', item);
  //   const { groceries } = this.state;
  //   const updatedGroceries = groceries.filter(grocery => console.log(grocery)
  //     );

  //   console.log(updatedGroceries);
  //   // this.setState({ groceries: updatedGroceries });

  // }


  updateColor(item) {
    const { groceries } = this.state;
    const newList = groceries.map(grocery => {
      if (item.name.toLowerCase() === grocery.name.toLowerCase()) {
        console.log(item.name, grocery.name);
        if (grocery.color === 'red') {
          grocery.color = 'black';
        } else {
          grocery.color = 'red';
        }
      }
      return grocery;
    });
    this.setState({ groceries: newList });
  }

  render() {
    // const {gr}
    return (
      <div>
        <AddGroceryForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}
        />
        <GroceryList groceries={this.state.groceries} onDelete={this.removeItem} updateColor={this.updateColor} />
      </div>
    );
  }
}

export default App;
