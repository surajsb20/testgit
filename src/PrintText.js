import React from "react";


class PrintText extends React.Component {
    constructor(props) {
      super(props);
    
     this.state = { value:0 };
    }
  

    tick(){
       this.interval=setInterval(function(){
     
     

       },1000);
    }
    componentDidMount(){

this.tick()
    }
    componentWillUnmount(){
    clearInterval(this.interval)
    }
   render(){
    return (<div>
      <p>
{this.state.value}
</p>
    </div>);
   }
  }
  
  export default  PrintText;