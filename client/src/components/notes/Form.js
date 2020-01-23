import React from 'react'
import { connect } from 'react-redux'

class NotesForm extends React.Component{
  constructor(props){
      super(props)
      this.state={
          title:props.title?props.title:'',
          body:props.body?props.body:'',
          category:''
      }
  }
  

  handleSubmit = (e) =>{
    e.preventDefault()
    const formData={
        title:this.state.title,
        body:this.state.body,
        category:this.state.category
    }
    this.props.handleSubmit(formData)
   }
   
   handleChange=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
   }
   
render(){
    return(
       <div className="form-group">
           <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">
                  Title    
              </label> 
              <input type="text" value={this.state.title} onChange={this.handleChange} name="title" className="form-control"/>
              <br/>
              <label htmlFor="body">
                  Body
              </label> 
              <textarea type="text" value={this.state.body}  onChange={this.handleChange} name="body" id="body" className="form-control"/>
              <br/>
              <label htmlFor="category">Category
              </label >
                <select name="category" onChange = {this.handleChange} id="category"className="form-control">
                    <option>select</option>
                   
                {
                    this.props.categories.map((category)=>{
                        return(
                            <option key={category._id} value = {category._id}>{category.name}</option>
                        )
                    })
                }
                </select>
                <br/>
              <input type="submit" class="btn btn-primary btn-lg btn-block"/>
          </form>
       </div> 
    )
}
}

const mapStateToProps = ( state ) =>
{
    return({
        categories : state.categories
    })
}
export default connect(mapStateToProps)(NotesForm)