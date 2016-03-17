import React, {PropTypes} from 'react';
import './App.styl';
import { connect } from 'react-redux';
import { addItemAction, showDoneAction, showAllAction, showTodoAction, doneItemAction } from './actions.jsx'

export default class App extends React.Component {

  removeItem(itemIndex){
    this.props.dispatch(doneItemAction(itemIndex));
  }

  addItem(){
    this.props.dispatch(addItemAction(this.refs.input.value));
    this.refs.input.value='';
  }

  render() {
    var filterButtonsStyle = {
      backgroundColor: '#ECECEC',
      marginTop: 20
    }

    var { dispatch } = this.props;

    return (
      <div className="App ee--panel ee--vcenter" style={{marginTop:20}}>
        <input ref='input' className="App--input" style={{width: 500}} placeholder="Item Text" type="text" />
        <div className='App--add ee--button' onClick={this.addItem.bind(this)} style={{marginTop: '10px', float: 'right'}}>add</div>
        <ul style={{marginTop:20}}>
          {this.props.items.map( (item, i) => {
            var liStyle = {
              padding: 15 //ee!
            };
            var filter = this.props.filter;
            if(filter=='todo' && item.isDone)  liStyle.display='none';
            if(filter=='done' && !item.isDone) liStyle.display='none';

            return (
              <li key={i} style={liStyle}>
                {item.text}
                { (!item.isDone) ?
                  <a href='#' style={{marginLeft:10}} onClick={this.removeItem.bind(this, i)}>done</a>
                    :
                  <span style={{color:'#aaaaaa'}}> <sup>completed</sup> </span> }
              </li>
            )
          })}
        </ul>

      <div
        className='App--showAll ee--button'
        onClick={ () => dispatch(showAllAction()) }
        style={filterButtonsStyle}>
        Show all
      </div>

      <div
        className='App--todo ee--button'
        onClick={ () => dispatch(showTodoAction()) }
        style={filterButtonsStyle}>
        Show todo
      </div>

      <div
        className='App--done ee--button'
        onClick={ () => dispatch(showDoneAction()) }
        style={filterButtonsStyle}>
        Show done
      </div>

      </div>
    );
  }
}

export default connect( (state) => {
  return Object.assign({}, state);
})(App)
