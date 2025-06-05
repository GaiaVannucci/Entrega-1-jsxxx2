import React from 'react'

function CartWidget() {
  return (
    <div style={{ display: 'inline-block', marginLeft: '20px' }}>
      <span style={{ fontSize: '24px', color: 'white' }}>🛒</span>
      <span style={{ color: 'white', marginLeft: '5px' }}>1</span>
    </div>
  )
}

export default CartWidget
