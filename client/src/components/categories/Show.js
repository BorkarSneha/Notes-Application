import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'

function CategoryShow (props){
    

    return(
        <div align="center">
            {
                !_.isEmpty(props.category) && <h3>NAME-{props.category.name}</h3>
            }
            <Link to = "/categories" className = "btn btn-primary">Back</Link> 
            
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return{
          category:state.categories.find(category=>category._id===props.match.params.id)
    }
}
export default connect(mapStateToProps)(CategoryShow)

