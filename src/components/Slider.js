import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import './Slider.scss';




export default function Slider(props){

    function handleLeft(){
        if(props.curIdx  - 1 < 0){
            props.setcurIdx(2);
        }else{
            props.setcurIdx(props.curIdx - 1);
        }
    }

    function handleRight(){
        props.setcurIdx((props.curIdx + 1) % 3 );
    }

    return(
        <section className="sliderSection">
            
            <div className="rowContainer">
                <div className="contentContainer">
                    <h1>
                        {props.data.title}
                    </h1>
                    <p>
                        {props.data.description}
                    </p>
                    <a className="navigateToOrderButton"><span>{props.data.buttonText}</span></a>

                    <div>
                        <div className="buttonContainer">
                            <button onClick={()=>handleLeft()}>
                                <BsArrowLeftCircle/>
                            </button>
                            <button onClick={()=>handleRight()}>
                                <BsArrowRightCircle/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="imgContainer">
                <img 
                width={"100%"} height={"100%"}
             
                src={require(`../images/home/slider/${props.data.imageSrc}`)}/>
                </div>
            </div>
           
        </section>
        
    )
}