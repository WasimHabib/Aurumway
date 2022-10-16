import React from 'react';
import styles from './Button.module.css'; 




export const Button = (props: {type: "SUCCESS" | "FAILURE" | "INFO", text: string, id: string, onClick: () => void, width?: string, height?: string}) => {

    if(props.width == undefined || props.width == null){
        props.width = "auto";
    }
    if(props.height == undefined || props.height == null){
        props.height = "auto";
    }


  return (
    <button id = {props.id} className = {props.type} style = {{width: props.width, height: props.height}}>
        {props.text}
    </button>
);
}


