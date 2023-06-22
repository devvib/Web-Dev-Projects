import logo from "./images/logo1.jpg";
import style from './App.module.css';
// import { ProductData } from "./ProductData";
function App() {
  return (
    <div >
      <header >
     <nav className={style.TopBar}>
      <img src={logo} alt="Amazon Logo"/>
     </nav>
      </header>
      <div className={style.MainContainer}>
      <img src="https://imgur.com/iOeUBV7.png" alt="Product preview"/>


      </div>
    </div>
  );
}

export default App;
