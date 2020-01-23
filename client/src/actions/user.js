import axios from 'axios'
import {setCategories} from './categories'
import {setNotes} from './notes'
import swal from 'sweetalert'

export const setUser=(user={})=>{
    return{
        type:'SET_USER',
        payload:user
    }

}
export const startRegisterUser=(formData,props)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3025/users/register',formData)
 
        .then((response)=>{
         if(response.data.hasOwnProperty('errors')){
             swal(response.data.message)
         }
         else
         {
        swal('Successfully Registered!!!')
           dispatch(setUser())
       props.history.push('/users/login')
         }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    }
export const startLoginUser=(formData,props)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3025/users/login',formData)
 
        .then((response)=>{
         if(response.data.hasOwnProperty('token'))
         {
            swal('Successfully Loggedin!!!')
            
             const token=response.data.token
             localStorage.setItem('authToken',token)
             Promise.all([axios.get('http://localhost:3025/users/account',{
                 headers:{
                     'x-auth':token
                 }
             }),axios.get('http://localhost:3025/categories',{
                   headers:{
                       'x-auth':token
                   }
             }),axios.get('http://localhost:3025/notes',{
                headers:{
                    'x-auth':token
                }
          })])
        .then(values=>{
            const [userResponse,categoriesResponse,notesResponse]= values
            dispatch(setUser(userResponse.data))
            dispatch(setCategories(categoriesResponse.data))
            dispatch(setNotes(notesResponse.data))
            props.history.push('/')
        })
         }
         else
         {
            swal(response.data.error)
         }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    }
export const startGetUser=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3025/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const user=response.data
            dispatch(setUser(user))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const startLogoutUser=()=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3025/users/logout`,{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then((response)=>{ 
            if(response.data.hasOwnProperty('notice'))
            {
                localStorage.removeItem('authToken')
                dispatch(setUser({}))       
                window.location.href="/users/login"
            }
            else
            {
                swal(response.data)
            }
                
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

