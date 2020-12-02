import React from 'react'
import { CourseItem } from '../../common/CourseItem'
import { MiniCard } from '../../common/MiniCard'
import { Search } from '../../common/Search'

const categories = [
  { name: 'CSS', icon: 'css.png' },
  { name: 'JavaScript', icon: 'javascript.png' },
  { name: 'Vue', icon: 'css.png' },
  { name: 'React', icon: 'reactjs.jpg' },
  { name: 'Java', icon: 'java.png' },
  { name: 'Python', icon: 'python.png' },
  { name: 'TypeScript', icon: 'typescript.png' },
  { name: 'Other', icon: 'drugoe.png' },
]

export function Entire() {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-8 offset-2">
            <h1 className="text-center mt-4">Welcome to CourseShop</h1>
            <p className="text-center mt-4">
              Resource of video programming lessons for developers. Take the
              knowledge of your profile from us, because we are the best, bruh.
              Really.
            </p>
          </div>
          <div className="col-6 offset-3 mt-5">
            <Search />
          </div>
        </div>
      </div>

      <div className="bg-secondary mt-5 pt-4 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center text-light">Popular categories</h2>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
                className="mt-4"
              >
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
              </div>
            </div>
            <div className="col-2 offset-5">
              <button type="button" className="btn btn-primary btn-block mt-4">
                All categories
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-5">Recently added courses</h2>
            <CourseItem />
            <CourseItem />
            <CourseItem />
          </div>
          <div className="col-2 offset-5">
            <button
              type="button"
              className="btn btn-primary btn-block mt-3 mb-4"
            >
              All courses
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
