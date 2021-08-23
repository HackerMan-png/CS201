import React, { useState } from 'react'

const Item = ({id, image, name, info, price}) => {
  return (
    <article className="single-item">
      <img src={image} alt={name} />
      <footer>
        <div className="item-info">
          <h4>{name}</h4>
          <h4 className="item-price">${price}</h4>
        </div>
        <p>{info}</p>
      </footer>

    </article>
  )
}

export default Item
