import React from 'react'

export default function resultdirectory(props) {
    return (
        <div>
            <ul>
                {props.results.map(result=>(
                    <li key={result.id}>
                        {/* <img alt={result.title} src={result.image.url}></img> */}
                        <h3>{result.name.first}</h3>
                        <h3>{result.name.last}</h3>
                        <h3>{result.location.city}</h3>
                        <h3>{result.email}</h3>
                        <h3>{result.dob.age}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}
