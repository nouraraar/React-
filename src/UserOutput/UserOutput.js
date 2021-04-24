import React from 'react'
import './UserOutput.css'


const userOutput = ( props ) => {

    return (
        <div className='UserOutput'>
            <p>Hi! my name is  {props.name} </p>
            <p>This post is created by  {props.name} </p>

        </div>

    );

};
export default userOutput;