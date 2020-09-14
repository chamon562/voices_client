import React from 'react'

export default function Page404({location}){
    return(
        <h1>No match found for{location.pathname} </h1>
    )
}