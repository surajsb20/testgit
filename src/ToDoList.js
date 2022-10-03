import React from "react";

class ToDoList extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul>
        {
            this.props.itemlist.map(item=>{

               <li key={item.id}>{item.text}</li> 
            })
        }

            </ul>
        );
    }
}


export default ToDoList;