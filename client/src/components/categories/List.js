import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveCategory} from '../../actions/categories'
import swal from 'sweetalert'
function CategoryList (props){
    

const handleRemove=(id)=>{
    props.dispatch(startRemoveCategory(id))
}
    

    return(
         <div className="container">
        <div align="center">
            <h2>Listing Categories-{props.categories.length}</h2>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.categories.map((category)=>{
                            return(
                                <tr key={category._id}>
                                    <td>{category.name}</td>
                                    <td><Link to={`categories/${category._id}`} class="btn btn-secondary">Show</Link></td>
                                    <td><Link to={`/categories/edit/${category._id}`} class="btn btn-primary">Edit</Link><br/></td>
                                    <td><button onClick={()=>{
                                        swal({
                                            title: "Are you sure?",
                                            text: "Once deleted, you will not be able to recover this data!",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                          })
                                          .then((willDelete) => {
                                            if (willDelete) {
                                                handleRemove(category._id)
                                              swal("Poof! Your data has been deleted!", {
                                                icon: "success",
                                              });
                                            } else {
                                              swal("Your data is safe!");
                                            }
                                          });
                                    
                                        }} class="btn btn-danger">Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/categories/new"class="btn btn-primary">Add Categories</Link>
        </div>
    )

}
const mapStateToProps=(state)=>{
    return{
        categories:state.categories
    }
}
export default connect(mapStateToProps)(CategoryList)
