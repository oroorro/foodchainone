import ProductModal from "./ProductModal";
import './MenuSection.scss';
export default function MenuSection(props){


    //console.log("menu", props.title);
    const products = props.data.map((productData) =>(
        <ProductModal   build={props.build} imgTitle={props.title} data={productData}/>
    ));

    return(
        <div className="menuSectionDiv">
        <section id={`${props.title}Section`} className={`${props.title}Section menuSection`}>
            <h2> {props.title}</h2>
            <div className="gridMenu">
            {products}
            </div>
        </section>
        </div>
    )
} 