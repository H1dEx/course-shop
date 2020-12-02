import React from 'react'
import { AutorCard } from '../../common/AutorCard'
import { Search } from '../../common/Search'

export function Source() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h1 className="text-center mt-4">Sources of courses</h1>
          <p className="text-center mt-4">
            This is a list of all course sources (authors) on coursehunter.
            There are no words that can convey how much they love us!
          </p>
        </div>
        <div className="col-6 offset-3 mt-5">
          <Search />
        </div>
      </div>

      <div className="row row-cols-2 row-cols-5">
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
        <div className="col mt-4">
          <AutorCard />
        </div>
      </div>
    </div>
  )
}
