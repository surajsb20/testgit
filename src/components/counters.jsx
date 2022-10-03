import React, { Component } from 'react'
import Counter from './counter'
export default class counters extends Component {
    constructor(){
        super();
        this.handleDelete=this.handleDelete.bind(this)
    }
    state={
     counters:[{
     id:1,value:4,},
     {id:2,value:0},
     {id:3,value:4},
     {id:4,value:4},
     
    
    ]   
    }

   handleDelete=(id)=>{
   // const counters=this.state.counters.filter(c=>c.id!==counterId)
   // this.setState({counters:counters})
console.log('event handler called',id)
const counter=this.state.counters.filter(c=>c.id!==id)
this.setState({counters:counter})
}
  render() {
    return (
<div>
    {this.state.counters.map(counter=>(
       <div> <Counter key={counter.id} value={counter.value} onDelete={this.handleDelete} id={counter.id}    onClick={this.handleDelete}/> </div>
    )
 
    )
         
    }    
      </div>
    )
  }
}
