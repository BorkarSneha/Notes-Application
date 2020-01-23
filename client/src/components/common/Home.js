import React from 'react'
import note from './note.png'
export default function Home(props){
    return(
        <div align="center">
             <h2>Welcome To Notes Application!!!</h2>
             <br/><br/><br/>
            <div className="offset-md-12 pb4">
            <img src={note} width="300" length="300" className="img-rounded"/>
            </div>
            
        </div>
    )
}