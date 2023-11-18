
export default function ProductModal(props){


    return(
        <div className="productModalContainer">
            <img src={require(`../images/home/product/${props.imgTitle.toLowerCase()}/${props.data.imageSrc}`)}/>
            <h2>{props.data.title}</h2>
            <p>{props.data.calorie}</p>
            <p>{props.data.description}</p>
        </div>
    )
} 