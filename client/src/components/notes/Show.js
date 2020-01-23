import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'

function NotesShow (props){
   
  
    return(
        <div align="center">
            {
                !_.isEmpty(props.note) &&
                <div>
                    <h3>TITLE-{props.note.title}</h3>
             <h3>BODY-{props.note.body}</h3>
             <h3>CATEGORY-{props.note.category.name}</h3>        
             </div>
            }
        <Link to = "/notes" className = "btn btn-primary">Back</Link>
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return{
          note:state.notes.find(note=>note._id===props.match.params.id)
    }
}
export default connect(mapStateToProps)(NotesShow)

