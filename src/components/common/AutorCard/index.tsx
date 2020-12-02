import React from 'react'
import { Link } from 'react-router-dom'
import png from '../../../assets/authors/no-logo.svg'

export function AutorCard() {
  return (
    <Link className="card" to="#">
      <img src={png} className="card-img-top" alt="logo" />
      <div className="card-body bg-dark text-light">
        <h5 className="card-title">Nickname</h5>
        <p className="card-text">Author</p>
      </div>
    </Link>
  )
}
