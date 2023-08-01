import React from 'react'

const CardListaUsuarios = ({arreglo}) => {
    const {name, hora, mesa, quenty} = arreglo
    console.log(arreglo)
  return (
    <div> 
        {name} --{hora} --{mesa}    
    </div>
  )
}

export default CardListaUsuarios