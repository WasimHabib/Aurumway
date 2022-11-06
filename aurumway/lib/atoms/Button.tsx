import { gsap } from 'gsap/dist/gsap';
import styles from '../../styles/Button.module.css'; 
import { colors } from '../models/contants';



export const Button = (props: {type: "SUCCESS" | "FAILURE" | "INFO", text: string, id: string, onClick: (param:any) => void, width?: string, height?: string, className:string}) => {
    let width = props.width;
    let height = props.height;
    let buttonClass = styles.INFO;


    var runAnim = function({currentTarget}:any) {
        if(props.type == "INFO"){
            let tl = gsap.timeline({});
            tl.fromTo(currentTarget, {
                color: colors.colorPentiary,
                backgroundColor:colors.colorPrimary,
                scaleX: 1,
                scaleY: 1,
                duration: 0.15,
                ease: "power2.in"
            }, {
                backgroundColor: colors.colorQuarternary,
                color: colors.colorPrimary,
                scaleX: 0.8,
                scaleY: 0.8,
                duration: 0.15,
                borderColor: colors.colorPrimary,
                ease: "power2.out"
            }, ">")
            tl.fromTo(currentTarget, {
                backgroundColor: colors.colorQuarternary,
                color: colors.colorPrimary,
                duration: 0.15,
                scaleX: 0.8,
                scaleY: 0.8,
                ease: "powe2.in"
            }, {
                backgroundColor: colors.colorPrimary,
                color: "#FFFFFF",
                duration: 0.15,
                scaleX: 1,
                scaleY: 1,
                
                borderColor: colors.colorQuarternary,
                ease: "power2.out"
            }, ">")
            
           tl.play();
        }

    }

    switch(props.type){
        case "SUCCESS":
            buttonClass = 'btn btn-success';
        break;
        case "FAILURE":
            buttonClass = 'btn btn-danger';
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
    <button type="button" id = {props.id} className ={buttonClass + ' ' + props.className} onClick={(event) => {runAnim(event); props.onClick(event)}}>
        {props.text}
    </button>
);

    


}


