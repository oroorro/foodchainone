import './ProductModal.scss';
import { useDispatch } from 'react-redux';
import {setClickedProduct, setQueue} from '../redux/slice';
import { useSelector } from 'react-redux';
export default function ProductModal(props){


    //console.log("what is it? ", props.data.category);
    //const orders = useSelector(state => state.slice.orders);
    const dispatch = useDispatch();

    function handleDispatch(){

        //check orders to see if user has reached limit of selections
        //orders
        dispatch(setClickedProduct({category: props.imgTitle.toLowerCase(), title: props.data.title, calorie: props.data.calorie}))
    }


    function testQueue(){
        dispatch(setQueue({h2:props.data.title}));
    }

    if(props.build){
        return(
            <div className="productModalContainer">

                <img src={require(`../images/build/${props.imgTitle.toLowerCase()}/${props.data.imageSrc}`)}
                    onClick={()=>handleDispatch()}
                />
                <h2 onClick={testQueue}>{props.data.title}</h2>
                <p>{props.data.calorie}</p>
            </div>
        )
    }
    else{
        return(
            <div className="productModalContainer">
                <img src={require(`../images/home/product/${props.imgTitle.toLowerCase()}/${props.data.imageSrc}`)}/>
                <h2>{props.data.title}</h2>
                <p>{props.data.calorie}</p>
                <p>{props.data.description}</p>
            </div>
        )
    }
    
} 