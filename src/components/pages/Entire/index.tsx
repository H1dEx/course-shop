import React from 'react'
import { CourseItem } from '../../common/CourseItem'
import { MiniCard } from '../../common/MiniCard'
import { Search } from '../../common/Search'
import { BandComponent } from '../../common/BandComponent'
import { Button } from '../../common/Button'
import { Col, Grid, Row } from '../../common/Grid'
import img from '../../../assets/icons/css.png'
import styled from 'styled-components'
import { Header, Subheader } from '../../common/Header'

const ButtonWrapper = styled.div`
  text-align: center;
  button {
    height: 40px;
    width: 270px;
  }
`

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
      <Grid classes={['pt-5']}>
        <Row>
          <Col classes={['col-8', 'offset-2']}>
            <Header classes={['text-center', 'mt-4']}>
              Welcome to CourseShop
            </Header>
            <p className="text-center mt-4">
              Resource of video programming lessons for developers. Take the
              knowledge of your profile from us, because we are the best, bruh.
              Really.
            </p>
          </Col>
          <Col classes={['col-6', 'offset-3', 'mt-5']}>
            <Search />
          </Col>
        </Row>
      </Grid>

      <BandComponent>
        <Grid>
          <Subheader classes={['text-center', 'pt-2', 'pb-2']} light>
            Popular categories
          </Subheader>
          <Row classes={['justify-content-center', 'pr-5', 'pl-5']}>
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
            <MiniCard url={img} text="CSS" />
          </Row>
          <ButtonWrapper>
            <Button>All categories</Button>
          </ButtonWrapper>
        </Grid>
      </BandComponent>

      <Grid classes={['mt-4']}>
        <Row>
          <Col>
            <Subheader classes={['text-center', 'mb-5']}>
              Recently added courses
            </Subheader>
            <CourseItem />
            <ButtonWrapper>
              <Button>All courses</Button>
            </ButtonWrapper>
          </Col>
        </Row>
      </Grid>
    </>
  )
}
