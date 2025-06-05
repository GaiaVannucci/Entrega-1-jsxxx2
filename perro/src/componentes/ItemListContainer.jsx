import React from 'react'

function ItemListContainer({ greeting }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer
