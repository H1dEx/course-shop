import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/logo/typescript-course.jpg'

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  box-shadow: 0 0 0 1px #7f00ac;
  width: auto;
  height: auto;
  margin: 10px 0 20px;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    width: 270px;
    height: 420px;
    margin: 10px auto;
    overflow: hidden;
  }
`

const ImageWrapper = styled.div`
  width: 360px;
  height: 220px;
  @media (max-width: 991px) {
    width: 268px;
    height: 164px;
  }
`

const Image = styled.img`
  max-width: 360px;
  max-height: 220px;
  @media (max-width: 991px) {
    max-width: 268px;
    max-height: 164px;
  }
`

const TextWrapper = styled.div`
  padding: 20px;
  @media (max-width: 991px) {
    padding: 18px;
  }
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 5px;
  @media (max-width: 991px) {
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
  height: 60px;
  overflow: hidden;
  @media (max-width: 991px) {
    height: 133px;
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 991px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }
`


export function Course ({children}: {children: React.ReactNode}): React.ReactElement { 
  return <Wrapper>{children}</Wrapper>
}

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

const CourseItem: React.FC<IProps> = ({ classes, course }) => {
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

Course.Item = CourseItem