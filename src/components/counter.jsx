import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag 1", "tag 2", "tag 3"],
  };
  styles = { fontSize: 20, fontWeight: "bold" };
constructor(){
    super();
    this.handelincrement=this.handelincrement.bind(this)
}
  /*render tags */
  rednderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags !</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
    ecrement= ()=>this.setState({count:this.state.count-1})
     
incrementdatapass(product){
  console.log(product)
  
  this.setState({count:this.state.count+1})

}
  handelincrement() {
   this. incrementdatapass({id:'hello'})
   // this.setState({count:this.state.count+1})

    
    
  }
  DeleteHandle(){

  }
  
  render() {
    let mclasses = this.getBadgeClass();
    return (
      <React.Fragment>
        <span style={{ fontSize: 20 }} className={mclasses}>
          {this.formatCount()}
        </span>
        <button
    
          classNWame="btn btn-info btn-sm"
          onClick={this.handelincrement}
        >
          Increment
        </button>
        <button className="btn btn-warning btn-sm m-4" onClick={this.ecrement}>Decrement</button>
        <button className="btn btn-danger btn-sm m-4" onClick={()=>this.props.onDelete(this.props.id)}>Delele</button>
        {this.state.tags.length === 0 && "please create new tags"}
        {/* {this.rednderTags()} */}
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let mclasses = "badge m-2 badge-";
    mclasses += this.state.count === 0 ? "warning" : "primary";
    return mclasses;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
