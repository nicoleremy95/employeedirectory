import React from 'react'
import "./resultdirectory.css"
export default function resultdirectory(props) {
    return (
        <div>
           
                {props.results.map(result=>(
                    <table className="result-tables" key={result.id}>
                       
                        <tr >
                            <th ></th>
                            <th className="headers-first">first name:</th>
                            <th className="headers-last" >last name:</th>
                            <th className="headers-location">location :</th>
                            <th className="headers-email">email :</th>
                            {/* <th >age :</th> */}
                        </tr>
                        <tr>
                        
                        <img alt={result.name} src={result.picture.thumbnail}></img>
                            <td>{result.name.first}</td>
                            <td>{result.name.last}</td>
                        
                            <td>{result.location.city}</td>
                            <td>{result.email}</td>
                            {/* <td>{result.dob.age}</td> */}
                     
                        </tr>
                    </table>
                ))}
         
        </div>
    )
}
