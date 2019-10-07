import React from "react";
import "./Header.css";
import mao from "../../imagens/hand.png";
import Icones from "../Icones/Icones";

import ios from '../../imagens/icone-ios.png'
import android from '../../imagens/icone-android.png'
import windows from '../../imagens/icone-windows.png'

const Header = () => {
   return (
      <header>
         <div className="texto">
            <h1>Notify<span>.</span></h1>
            <p>A great new free psd theme to showcase your new application</p>
               <div className="icones">
                  <Icones imagem={ios}/>
                  <Icones imagem={android}/>
                  <Icones imagem={windows}/>
               </div>
         </div>
         <div className="mao">

            <img src={mao} alt="mao"></img>
            
         </div>

      </header>
   )

}

export default Header;