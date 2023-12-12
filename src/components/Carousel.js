import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { useState } from "react";
import './Carousel.scss';

export default function Carousel(props){

    const [idx, setIdx] = useState(0);
    function buttonHandler(next) {

        if(idx == 0 && next == -1){
            setIdx(2);
        }else if(next == -1){
            setIdx(idx - 1);
        }else if(idx == 2 && next == 1){
            setIdx(0);
        }
        else{
            setIdx(idx + 1);
        }
      }


      const carouselItems = props.data.map((item)=>(
        <div className="carouselItem">
                <div className="contentContainer">
                    <h1>
                        {item.title}
                    </h1>
                    <p>
                        {item.description}
                    </p>
                    <a>{item.buttonText}</a>

                    <div>
                        <div className="buttonContainer">
                            <button onClick={()=>buttonHandler(-1)}>
                                <BsArrowLeftCircle/>
                            </button>
                            <button onClick={()=>buttonHandler(1)}>
                                <BsArrowRightCircle/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="imgContainer">
                <img 
                width={"100%"} height={"100%"}
             
                src={require(`../images/home/slider/${item.imageSrc}`)}/>
                </div>
            </div>
    ))

    return(
        <section className="carouselSection"
            style={{ transform: `translateX(-${idx * 100}%)` }}
        >
            {carouselItems}
        </section>
    )



}