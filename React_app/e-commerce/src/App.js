import style from './App.module.css';
import { useState } from "react";
import ProductData from "./ProductData";
import ProductPreview from "./ProductPreview";
import ProductDetails from "./ProductDetails";
import Topbar from "./Topbar";
console.clear();
function App() {
  const [index, setIndex] = useState(0);
  const [toggle,setToggle]=useState(0);
  function onColorOptionClick(pos) {
    setIndex(pos);
  }
  function onFeatureOptionClick(pos) {
    console.log(pos);
    setToggle(pos);
  }
  return (


    <div >
      <Topbar />

      <div className={style.MainContainer}>
        <div className={style.ProductPreview}>
          <ProductPreview ImgData={ProductData.colorOptions[index]} FeatureData={toggle} />
        </div>

        <div className={style.ProductData}>
          <ProductDetails data={ProductData} onColorOptionClick={onColorOptionClick} onFeatureOptionClick={onFeatureOptionClick} Index={index} Toggle={toggle}/>
        </div>

      </div>
    </div>
  );
}

export default App;
