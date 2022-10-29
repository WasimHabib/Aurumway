import { gsap } from 'gsap/dist/gsap';
import styles from '../../styles/Button.module.css'; 





export const Button = (props: {type: "SUCCESS" | "FAILURE" | "INFO", text: string, id: string, onClick: (param:any) => void, width?: string, height?: string, className:string}) => {
    let width = props.width;
    let height = props.height;
    let buttonClass = styles.INFO;


    var runAnim = function({currentTarget}:any) {
        let tl = gsap.timeline({});
        tl.fromTo(currentTarget, {
            color: "#FFFFFF",
            scaleX: 1,
            scaleY: 1,
            duration: 0.15,
            ease: "power2.in"
        }, {
            backgroundColor: "#FFC300",
            color: "#000814",
            scaleX: 0.8,
            scaleY: 0.8,
            duration: 0.15,
            borderColor: "#000814",
            ease: "power2.out"
        }, ">")
        tl.fromTo(currentTarget, {
            color: "#000814",
            duration: 0.15,
            scaleX: 0.8,
            scaleY: 0.8,
            ease: "powe2.in"
        }, {
            backgroundColor: "#000814",
            color: "#FFFFFF",
            duration: 0.15,
            scaleX: 1,
            scaleY: 1,
            borderColor: "#FFC300",
            ease: "power2.out"
        }, ">")
        
       tl.play();
    }

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
    <button  id = {props.id} className = {buttonClass + " " + props.className} style = {{width: width, height: height}} onClick={(event) => {runAnim(event); props.onClick(event)}}>
        {props.text}
    </button>
);

    


}


