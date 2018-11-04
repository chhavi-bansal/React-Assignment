import React, { Component } from 'react';
import CustomForm from '../common/CustomForm.jsx'
class AppDetail extends Component {
  constructor(props) {
  super(props);
  this.state={
  }
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(e){
  e.preventDefault()
  this.setState({submitted:true})
  this.props.handleSubmit()
}
  render() {
    return (<div className='container-fluid col-sm-4 col-sm-offset-4 form-style'>
      {this.props.item.fields.map((field)=>{
        return(
        <CustomForm key={field.name} submitted={this.state.submitted} field={field} />)
        })
       }
      <button type='submit' onClick={this.handleSubmit.bind(this)} className='form-action'>{!this.props.showNext? 'Next':'Finish'}</button>
    </div>);
  }
}
export default AppDetail