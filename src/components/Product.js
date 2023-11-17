import data from '../tempDataBase/data.json'
import './Product.scss';

export default function Product(props){

    function ProductView(){
        if(props.main){
            return(
                <div className='productSectionContainer'>
                <img src={require(`../images/home/popular/${props.data.imageSrc}`)}/>
                <h3>{props.data.title}</h3>
                <p>{props.data.description}</p>
                <button>Order now</button>
                </div>
            )
        }else{
            return(
                <>
                </>
            )
        }
    }

    return(
        <ProductView/>
    )

}