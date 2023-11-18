import ProductModal from "./ProductModal";
import './MenuSection.scss';
export default function MenuSection(props){


    const products = props.data.map((productData) =>(
        <ProductModal imgTitle={props.title} data={productData}/>
    ));

    return(
        <section className={`${props.title}Section menuSection`}>
            <h2> {props.title}</h2>
            <div className="gridMenu">
            {products}
            </div>
        </section>
    )
} 