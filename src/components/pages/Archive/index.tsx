import React from 'react'
import { BandComponent } from '../../common/BandComponent'
import { Course } from '../../common/CourseItem'
import { Grid, Row } from '../../common/Grid'
import { Search } from '../../common/Search'

export function Archive() {
  return (
    <>
      <BandComponent classes={["bg-dark"]}>
        <Grid>
          <Row>
            <div className="col-8 offset-2">
              <h1 className="text-center mt-4 text-light">All courses</h1>
              <h5 className="text-center mt-4 text-light">
                List of ALL available courses!
              </h5>
            </div>
            <div className="col-6 offset-3 mt-4 mb-2">
              <Search />
            </div>
          </Row>
        </Grid>
      </BandComponent>
      <Grid classes={["pt-4", "pb-5"]}>
        <h3 className="mb-5 mt-4">All courses</h3>
        <Course>
          <Course.Item />
          <Course.Item />
          <Course.Item />
        </Course>
      </Grid>
    </>
  )
}
