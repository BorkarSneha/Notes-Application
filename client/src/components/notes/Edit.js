import React from 'react'
import NotesForm from './Form'
import _ from 'lodash'
import {startEditNote} from '../../actions/notes'
import {connect} from 'react-redux'
function NotesEdit(props){
    
const handleSubmit=(formData)=>{
    props.dispatch(startEditNote(formData,props))
}
        return(
            <div>      
            {
                !_.isEmpty(props.note)&&(
                  <div className="col-md-6 offset-md-3">
                  <div  align="center">
                  <h2>Edit Note-{props.note.title}</h2>
                  </div>
                  {
                  <NotesForm {...props.note} handleSubmit={handleSubmit} />
                  }
                  </div>
                )
            }  
          </div>
            
        )
    }
    const mapStateToProps=(state,props)=>{
        return{
            note:state.notes.find(note=>note._id===props.match.params.id)
        }
  }
  export default connect(mapStateToProps)(NotesEdit)