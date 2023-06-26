import { React } from "react";
import style from "./ProductDetails.module.css";

const ProductDetails = (props) => {


    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [style.ProductImage];
        if (pos === props.Index) classArr.push(style.SelectedProductImage);
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
        );
    })

    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [style.FeatureItem];
        if (pos === props.Toggle) classArr.push(style.SelectedFeatureItem);
        return (
            <button key={pos} className={classArr.join(' ')} onClick={()=>props.onFeatureOptionClick(pos)}>{item}</button>
        );
    })

    return (
        <div className={style.ProductData}>
            <h1 className={style.ProductTitle}>{props.data.title}</h1>
            <p className={style.ProductDesciption}>{props.data.description}</p>
            <h3 className={style.SectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
            </div>

            <h3 className={style.SectionHeading}>Features</h3>
            <div>
                {featureList}
            </div>
            <button className={style.PrimaryButton}>Buy Now</button>


        </div>
    );
}
export default ProductDetails;