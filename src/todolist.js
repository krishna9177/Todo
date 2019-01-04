import React, { Component } from 'react';
import {connect} from 'react-redux'

const Todo=(props)=>{
    return(
        <p>
            {props.todo} <button onClick={props.removeTodo(props.todo)}>Remove</button>
        </p>
    )
}
class Todolist extends Component {
    constructor(){
        super()
        this.state={
            todos:[]
        }
    }
    componentWillReceiveProps(newProps){
        console.log('newProps'+newProps)
        this.setState({
            todos:newProps.todos
        })
    }
    render() {
        return (
            <div>
                {
                   this.state.todos.map((todo)=>{
                       return <Todo key={todo} removeTodo={this.removeTodo} todo={todo}/>
                   })
               }
            </div>
        );
    }
}

var mapStateToProps=(state)=>{
   
    return {
        todos:state
    }
}

export default connect(mapStateToProps)(Todolist);
