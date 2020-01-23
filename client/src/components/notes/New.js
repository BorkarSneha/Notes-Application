import React from 'react'
import NotesForm from './Form'
import {connect} from 'react-redux'
import {startAddNote} from '../../actions/notes'
function NotesNew (props){
    const handleSubmit=(formData)=>{
        props.dispatch(startAddNote(formData,props)) 
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
            <h2>Add Notes</h2>
            <NotesForm handleSubmit={handleSubmit}></NotesForm>
        </div>
        </div>
    )
}
export default connect()(NotesNew)