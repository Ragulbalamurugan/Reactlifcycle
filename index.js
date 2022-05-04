
import React from 'react'
import ReactDOM from 'react-dom';
class Reactlifecycle extends React.Component{
  constructor(){
    super()
    this.state={initialvalue:"welcome", names:"guys"}
  }
  componentWillMount()
 {
  alert("Learn Reactjs lifecycle");
 }
  render(){
  return(<div>
    <h1>{this.state.initialvalue} {this.state.names}</h1>
    <button type='button' onClick={this.changevalue}>change value</button>
    <br/>
    <br/>
    <button type='button' onClick={this.deleteheader}>Deleteheader</button>
    </div>
  )
  }
  changevalue = ()=>{
    this.setState({initialvalue:"Learn reactjs in tamil"});
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({initialvalue:"Thank you"})
    },5000)
  }
  componentWillUpdate(){
    alert("Do you want to updatea new value")
  }
  componentDidUpdate(){
    document.getElementById('mydiv').innerHTML="NEW VALUE UPDATED SUCCESSFULLY" +  this.state.initialvalue;
  }
  shouldComponentUpdate(){
    return true ;
  }
  deleteheader = ()=>{
    this.setState({initialvalue:false, names:false})
  }
  componentWillUnmount(){
    alert("Header Deleted")
  };

}
ReactDOM.render(<Reactlifecycle />, document.getElementById('root'))
