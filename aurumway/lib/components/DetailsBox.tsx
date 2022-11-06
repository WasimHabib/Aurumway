import React from 'react';
import styles from '../../styles/DetailsBox.module.css';
import { colors } from '../models/contants';
export const DetailsBox = (props: { className:string, bodytext: string, }) => {
    
   
    let bodyStyle:  React.CSSProperties = {
        backgroundColor: colors.colorTertiary,
        overflow: 'hidden'
    }
  
  
    return (
    <>
    <div className={props.className + " " + styles.body} style={bodyStyle}>
        <div className={styles.textContainer}>
            <p className={styles.text} >
                {props.bodytext}
            </p>
        </div>
    </div>
    </>
  )
}
