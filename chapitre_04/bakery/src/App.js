import React from 'react'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor() {
    super()
  
    this.state = {
       activeTab: "add",
       items: []
    }

    this.selectAdd = this.selectAdd.bind(this)
    this.selectPay = this.selectPay.bind(this)
    this.selectList = this.selectList.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  deleteItem() {
    let itemList = [...this.state.items]
    itemList.pop()
    this.setState(prevState => {
      return {
        ...prevState,
        items: [...itemList]
      }
    })
}

  selectAdd() {
    this.setState(prevState => {
      return {
        ...prevState,
        activeTab: "add",
      }
    })
  }

  selectPay() {
    this.setState(prevState => {
      return {
        ...prevState,
        activeTab: "pay",
      }
    })
  }

  selectList() {
    this.setState(prevState => {
      return {
        ...prevState,
        activeTab: "list",
      }
    })
  }

  addItem(name, price) {
    let obj = {
      itemName: name,
      itemPrice: price
    };

    this.state.items.push(obj)

    console.log(this.state.items)
  }

  render() {
    return (
      <div>
        <Button isSelected={this.isSelected} children="add" onClick={this.selectAdd}/>
        {this.state.activeTab === "add" ? <Add addItem={this.addItem}/> : null}
        <Button isSelected={this.isSelected} children="pay" onClick={this.selectPay}/>
        {this.state.activeTab === "pay" ? <Pay items={this.state.items}/> : null}
        <Button isSelected={this.isSelected} children="list" onClick={this.selectList}/>
        {this.state.activeTab === "list" ? <List items={this.state.items} deleteItem={this.deleteItem}/> : null}
      </div>
    )
  }
}

export default App;
