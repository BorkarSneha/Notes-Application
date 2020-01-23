import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from './Form'
import {startAddCategory} from '../../actions/categories'

function CategoryNew (props){
   const handleSubmit=(formData)=>{
    props.dispatch(startAddCategory(formData,props)) 
   }

    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
            <h2>Add Category</h2>
            <CategoryForm  handleSubmit={handleSubmit}></CategoryForm>
            </div>
        </div>
    )
}
export default connect()(CategoryNew)
