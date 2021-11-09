import React from 'react'
import classes from './Message.module.css'

type typeMessage = {
    avatar: string
    time: string
    name: string
    message: string
}


function Message(props: typeMessage) {
    let dateTime = new Date()

    return (
        <div className={classes.message}>
            <img className={classes.image} alt='image' src={props.avatar}/>
            <div className={classes.chat}>
                <span className={classes.user}>{props.name}</span>
                <p>{props.message}</p>
                <span className={classes.time}> {`${dateTime.getHours()}:${dateTime.getMinutes()}`}  </span>
            </div>
                
        </div>
    )
}

export default Message
