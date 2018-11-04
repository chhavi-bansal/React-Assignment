import React, { Component } from 'react';
import {FormControl,FormGroup,ControlLabel} from 'react-bootstrap';
import {validateEmail} from '../constant/Constant'

class CustomForm extends Component {
  constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  // Don't call this.setState() here!
  this.state = {
    value:''
  };
}
getValidationState() {
  if(this.props.submitted){
  const length = this.state.value.length;
  const validEmail = length && this.props.field.name =='email' ? validateEmail(this.state.value) :true
  if(!validEmail) return 'error'
  if (length <= 0) return 'error';}
}
handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      this.props.field.type == 'dropdown'?
      <FormGroup controlId="formControlsSelect">
      <input name={this.props.field.name} value={this.state.value} onChange={this.handleChange} hidden/>
      <ControlLabel>{this.props.field.label}</ControlLabel>
      <FormControl componentClass="select" placeholder="select" onChange={this.handleChange}>
        {this.props.field.options.map((value,i)=>{return <option key={i} >{value}</option>})}
      </FormControl>
      </FormGroup>:
        <FormGroup key={this.props.field.label} controlId={this.props.field.name} validationState={this.getValidationState()}>
          <ControlLabel>{this.props.field.label}</ControlLabel>
            <FormControl
              type = {this.props.field.type}
              value={this.state.value}
              placeholder={this.props.field.label}
              onChange={this.handleChange}
              name={this.props.field.name}
              required={this.props.field.validate}
              label={this.props.field.label} 
            />
            <FormControl.Feedback />
        </FormGroup>)
    }
}
export default CustomForm