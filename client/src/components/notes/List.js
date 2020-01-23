import React from 'react'
import swal from 'sweetalert'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveNote} from '../../actions/notes'
function NotesList (props){
    
    
   const handleRemove = (id)=>{
        props.dispatch(startRemoveNote(id))
    }
    
        return(
            <div className="container">
                <div align="center">
                <h2>Listing Notes-{props.notes.length}</h2>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Category</th>
                            <th>Action</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.notes.map((note)=>{
                                return(
                                    <tr key={note._id}>
                                        <td>{note.title}</td>
                                        <td>{note.body}</td>
                                        <td>{note.category.name}</td>
                                        <td><Link to={`notes/${note._id}`} class="btn btn-secondary">Show</Link></td>
                                        <td><Link to={`/notes/edit/${note._id}`}   class="btn btn-primary">Edit</Link><br/></td>
                                        <td><button onClick={()=>
                                            {
                                                swal({
                                                    title: "Are you sure?",
                                                    text: "Once deleted, you will not be able to recover this data!",
                                                    icon: "warning",
                                                    buttons: true,
                                                    dangerMode: true,
                                                  })
                                                  .then((willDelete) => {
                                                    if (willDelete) {
                                                        handleRemove(note._id)
                                                      swal("Poof! Your data has been deleted!", {
                                                        icon: "success",
                                                      });
                                                    } else {
                                                      swal("Your data is safe!");
                                                    }
                                                  });
                                            
                                                
                                            }
                                         } class="btn btn-danger">Remove</button></td>
                                        

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Link to="/notes/new" class="btn btn-primary">Add Notes</Link>
                </div>
       
        )
    }
    const mapStateToProps=(state)=>{
        return{
            notes:state.notes
        }
    }
    export default connect(mapStateToProps)(NotesList)