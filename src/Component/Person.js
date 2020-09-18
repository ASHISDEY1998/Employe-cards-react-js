import React from 'react'
import PerStyles from '../App.module.css';
import Button from'./Button'

export default function Person(props) {
    return (
        <div className={PerStyles.Person_card}>
            <h1>My name is {props.name} And I  am {props.age} years old.</h1>
            <input type="text" onChange={props.changed} value={props.name}/><br></br>
            <Button btnevent={props.delete} lable={"Delete Profile"}/> 
        </div>
    )
}
