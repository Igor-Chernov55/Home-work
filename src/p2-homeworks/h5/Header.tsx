import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import classes from './style.module.css'
import {PATH} from "./Routes";

function Header() {
    let [edit, setEdit] = useState(false)

    return (
        <div className={classes.list}>

            <div className={edit ? classes.list : classes.listNone}>
                <NavLink to={PATH.PRE_JUNIOR} className={classes.items}>PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} className={classes.items}>Junior</NavLink>
                <NavLink to={PATH.NOT_FOUND} className={classes.items}>Junior+</NavLink>
            </div>

            <button className={classes.button} onClick={() =>setEdit(!edit)}>+</button>
        </div>
    )
}

export default Header
