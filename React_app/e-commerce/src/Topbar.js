import { React } from "react";
import logo from "./images/logofinal.jpg";
import style from "./Topbar.module.css";
const Topbar=()=>{
    return (

    <div >
         <nav className={style.TopBar}>
          <img src={logo} alt="Amazon Logo" />
        </nav>
    </div>

    );
}
export default Topbar;