import React from 'react'

export default function Page404({location}){
    return(
        <div>
            <h1>404 Not Found </h1>
            <h1>No match found for:{location.pathname} </h1>
            <img src="https://media2.giphy.com/media/xTiTnGQG98hLhmIN4A/giphy.gif"/>
        </div>
    )
} 