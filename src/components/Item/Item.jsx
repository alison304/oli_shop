import React from 'react'
import { Link } from "react-router-dom"
import "./Item.css"


function Item({id, product, stock}) {
  return (
  <div className="card" >
    <Link to ={`/detail/${product.id}`} className='link'>
      <div>{product.name}</div>
      <img className="card-image" src={product.pictureUrl} alt="Imagen del producto"></img>  
    </Link>
    <div>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>
    </div>
    <Link to ={`/detail/${product.id}`} className='btn-opt'>
        Ver detalle
    </Link>
  </div>  
  )
}

export default Item
