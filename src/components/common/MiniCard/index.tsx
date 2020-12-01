import React from 'react'
import img from '../../../assets/icons/css.png'

export function MiniCard() {
  return (
    <div
      style={{
        backgroundColor: 'darkslategray',
        color: 'white',
        margin: 10,
        width: 165,
        height: 50,
        padding: '8px 15px',
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        src={img}
        style={{ width: 32, height: 32 }}
        alt="alt"
      />
      <span className="text-center" style={{ width: '100%' }}>
        CSS
      </span>
    </div>
  )
}
