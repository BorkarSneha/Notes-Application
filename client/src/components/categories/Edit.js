import React from 'react'
import _ from 'lodash'
import {startEditCategory} from '../../actions/categories'
import {connect} from 'react-redux'
import CategoryForm from './Form'

function CategoryEdit (props){
    

const handleSubmit=(formData)=>{
    props.dispatch(startEditCategory(formData,props))
}
   
        return(
            
            <div>      
            {
                !_.isEmpty(props.category)&&(
                  <div className="col-md-6 offset-md-3">
                  <div align="center">   
                  <h2>Edit Category-{props.category.name}</h2>
                  </div>
                  {
                  <CategoryForm {...props.category} handleSubmit={handleSubmit} />
                  }
                  </div>

                )
            }  
          </div>
        )
    }
 const mapStateToProps=(state,props)=>{
        return{
            category:state.categories.find(category=>category._id===props.match.params.id)
        }
  }
  export default connect(mapStateToProps)(CategoryEdit)
  