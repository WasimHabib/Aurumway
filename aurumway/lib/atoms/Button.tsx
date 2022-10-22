import React, { useRef } from 'react';
import styles from '../../styles/Button.module.css'; 




export const Button = (props: {type: "SUCCESS" | "FAILURE" | "INFO", text: string, id: string, onClick: (param:any) => void, width?: string, height?: string, className:string}) => {
    let width = props.width;
    let height = props.height;
    let buttonClass = styles.INFO;

    switch(props.type){
        case "SUCCESS":
            buttonClass = styles.SUCCESS;
        break;
        case "FAILURE":
            buttonClass = styles.FAILURE;
        break;
        case "INFO":
            buttonClass = styles.INFO;
        break;
    }
    
    if(props.width == undefined || props.width == null){
        width = "auto";
    }
    if(props.height == undefined || props.height == null){
        height = "auto";
    }


  return (
    <button  id = {props.id} className = {buttonClass + " " + props.className} style = {{width: width, height: height}} onClick={props.onClick}>
        {props.text}
    </button>
);

    


}


