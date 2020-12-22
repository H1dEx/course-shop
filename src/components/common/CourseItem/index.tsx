import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/logo/typescript-course.jpg'

const Card = styled.div`
  box-sizing: border-box;
  border: 1px solid #222;
  width: 1586px;
  height: 220px;
  margin: 10px 0 20px;
  @media (max-width: 1600px) {
    max-width: 1386px;
    width: auto;
  }
  @media (max-width: 1400px) {
    max-width: 1186px;
    width: auto;
  }
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 270px;
    height: 420px;
    margin: 10px 0;
  }
`

const ImageWrapper = styled.div`
  width: 360px;
  height: 220px;
  @media (max-width: 992px) {
    width: 268px;
    height: 164px;
  }
`

const Image = styled.img`
  max-width: 360px;
  max-height: 220px;
  @media (max-width: 992px) {
    max-width: 268px;
    max-height: 164px;
  }
`

const TextWrapper = styled.div`
  padding: 20px;
  @media (max-width: 992px) {
    padding: 18px;
  }
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 11px;
  @media (max-width: 992px) {
    margin-bottom: 0;
  }
`

const Author = styled.a`
  display: block;
  color: #757575;
  margin-bottom: 15px;
  font-size: 14px;
`

const Description = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
  overflow: hidden;
  @media (max-width: 992px) {
    height: 133px;
  }
`

interface IProps {
  course?: {
    title: string
    author: string
    descr: string
    lessons: number
    totalTime: number
    url: string
  }
  classes?: string[]
}

export const CourseItem: React.FC<IProps> = ({ classes, course }) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={logo} alt="..." />
      </ImageWrapper>
      <TextWrapper>
        <Title>Course title</Title>
          <Author>Author's name</Author>  
        <Description>
          Самый современный ресурс JS онлайн! Изучите Javascript, создав красивое портфолио проектов Всегда ставьте на Javascript! В течение многих лет лучшие рекрутеры в отрасли нанимали новых инженеров, основываясь исключительно на своих знаниях Javascript. Если вы хотите получить работу по программированию, это язык для изучения! Но изучение Javascript сложно! Есть причудливый синтаксис, странные шаблоны проектирования и миллиард ресурсов онлайн,...
        </Description>
        <p>
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </TextWrapper>
    </Card>
  )
}
