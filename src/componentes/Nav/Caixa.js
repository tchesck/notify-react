import React from 'react'


const Caixa = ({imagem, titulo}) => {
    return(
        <div className="Caixa">
           <div>
               <img src={imagem} alt="" />
           </div>
           <h1>{titulo}</h1>
           <p>xubilau</p>
        </div>
    )
}

export default Icones;