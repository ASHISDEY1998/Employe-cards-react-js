import React from 'react'
import Styles from '../App.module.css';

export default function Button(props) {
    return (
        <div>
        <button className={Styles.btn_style} onClick={props.btnevent}>{props.lable}</button>
        </div>
    )
}
