import React, { Component } from 'react';
import {Settings,validateEmail} from '../constant/Constant'
import AppDetail from './AppDetail'
import '../style/app.css'

class BaseContainer extends Component {
  constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = {
    showNext:false,
    formData:[]
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(){
  let formData=this.state.formData
  let email= document.getElementById('email') && document.getElementById('email').value && validateEmail(document.getElementById('email').value)
  document.querySelectorAll("form input").forEach((item)=>{
    formData[item.name]=item.value}
    )
  document.querySelectorAll("form input[value='']").length || !email ?
  this.setState({showNext:false,formData}) : this.setState({showNext:true,formData})
  if(this.state.showNext){alert("Thank you:)");console.log(this.state.formData)}
}
  render() {
  return(
    <form noValidate>
  {Settings.Step.map((item)=>{
    if(item.title=='Step_2' && this.state.showNext== false)return null
    if(item.title!='Step_2' && this.state.showNext== true) return null
    return  <AppDetail key={item.title} showNext={this.state.showNext} handleSubmit={this.handleSubmit} item={item}  />
    })}
    </form>)
  }
}
export default BaseContainer