import React from 'react'

import './Icones.scss';


const Icones = ({imagem}) => {
    return(
        <div className="Icones">
            <img src={imagem} alt="Icone" />
        </div>
    )
}

export default Icones;