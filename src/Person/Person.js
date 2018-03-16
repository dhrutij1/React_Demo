import React from 'react';
import './Person.css'
const person = (props) => {
	return (
        <div className = "Person">
		<p onClick = {props.click}>I am a {props.name} and I am {props.age} yrars old !</p>
        <p>{props.childern}</p>
        <input type = "text" onChange = {props.changed} value = {props.name}/>
        </div>
		)

};

export default person;