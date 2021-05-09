import React from 'react';
import Card from "../UI/Card";


const Models = () => {

    const models = ['Small Home', 'Mid-Sized Home', 'Large-Home']

    return(
        <>
        <h1 style={{color:"black"}}>Models</h1>
        {models.map(model => {
            return <Card>{model}</Card>
        })}
        </>
    );
}


export default Models;