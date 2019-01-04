import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from './redux_todos'

class Addtodo extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            todo:''
        }
    }
    onChange=(e)=>{
        this.setState({
            todo:e.target.value
        })
    }
    addTodo=()=>{
        this.props.addTodo(this.state.todo)
        this.setState({
            todo:''
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.todo} onChange={this.onChange}></input>
                <button onClick={this.addTodo}>Add</button>
            </div>
        );
    }
}
var mapDispatchToProps={
    addTodo
}
export default connect(null,mapDispatchToProps) (Addtodo);
