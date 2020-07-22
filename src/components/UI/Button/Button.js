import React from 'react';
import classes from "./Button.module.scss";

const Button = (props) => {
    const cls = [
        classes.button,
        classes[props.className]
    ]

    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >{props.children}</button>
    )
}

export default Button;

