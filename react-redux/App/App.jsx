import React from 'react';
import './App.styl'

export default class App extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      items: [
        {
          text: "Item 1",
          isDone: false
        },
        {
          text: "Item 2",
          isDone: true
        },
        {
          text: "Item 3",
          isDone: false
        },
        {
          text: "Item 4",
          isDone: false
        },
        {
          text: "Item 5",
          isDone: false
        }
      ],
      filter: 'todo' //'todo', 'all', 'done'
    };
    this.removeItem = this.removeItem.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showTodo = this.showTodo.bind(this);
    this.showDone = this.showDone.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  removeItem(itemIndex){
    var newItems = this.state.items.slice(0);
    newItems[itemIndex].isDone = true;
    this.setState({
      items: newItems
    });
  }

  addItem(){
    var newItems = this.state.items.slice(0);
     newItems.push({
      text: this.refs.input.value,
      isDone: false
    });
    this.setState({
      items: newItems
    });
    this.refs.input.value='';
  }

  showAll(){
    this.setState({
      filter: 'all'
    });
  }

  showTodo(){
    this.setState({
      filter: 'todo'
    });
  }

  showDone(){
    this.setState({
      filter: 'done'
    });
  }

  render() {
    var filterButtonsStyle = {
      backgroundColor: '#ECECEC',
      marginTop: 20
    }
    return (
      <div className="App ee--panel ee--vcenter" style={{marginTop:20}}>
        <input ref='input' className="App--input" style={{width: 500}} placeholder="Item Text" type="text" />
        <div className='App--add ee--button' onClick={this.addItem} style={{marginTop: '10px', float: 'right'}}>add</div>

        <ul style={{marginTop:20}}>
          {this.state.items.map( (item, i) => {
            var liStyle = {
              padding: 15 //ee!
            };
            var filter = this.state.filter;
            if(filter=='todo' && item.isDone)  liStyle.display='none';
            if(filter=='done' && !item.isDone) liStyle.display='none';

            return (
              <li key={i} style={liStyle}>
                {item.text}
                { (!item.isDone) ?
                  <a href='#' style={{marginLeft:10}} onClick={this.removeItem.bind(null, i)}>done</a>
                    :
                  <span style={{color:'#aaaaaa'}}> <sup>completed</sup> </span> }
              </li>
            )
          })}
        </ul>

        <div className='App--showAll ee--button' onClick={this.showAll} style={filterButtonsStyle}>Show all</div>
        <div className='App--todo ee--button' onClick={this.showTodo} style={filterButtonsStyle}>Show todo</div>
        <div className='App--done ee--button' onClick={this.showDone} style={filterButtonsStyle}>Show done</div>
      </div>
    );
  }
}
