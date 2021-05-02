import React, {useEffect, useState} from "react"
import {Course} from "../../common/CourseItem"
import {MiniCard} from "../../common/MiniCard"
import {Search} from "../../common/Search"
import {BandComponent} from "../../common/BandComponent"
import {Button} from "../../common/Button"
import {Col, Grid, Row} from "../../common/Grid"
import img from "../../../assets/icons/css.png"
import styled from "styled-components"
import {Header, Subheader} from "../../common/Header"
import {Link} from "react-router-dom"
import {useHttp} from "../../../hooks/http.hook";
import {Spinner} from "../../common/Spinner";
import {LoadingWrapper} from "../Profile";
import {ICategoryPayload, ICourse, ICoursePayload, ITag} from "../../../../types";
import {toast} from "react-toastify";
import {EmptyText} from "../../common/EmptyText";

const ButtonWrapper = styled.div`
  text-align: center;

  button {
    height: 40px;
    width: 270px;
  }
`

export function Entire() {
    const [tags, setTags] = useState<ITag[]>([]);
    const [courses, setCourses] = useState<ICourse[]>([]);
    const {loading, request} = useHttp();
    useEffect(() => {
        const makeRequest = async () => {
            const [{courses}, {tags}] = await Promise.all([request<ICoursePayload>('/courses?page=1&count=10'), request<ICategoryPayload>('/categories?page=1&count=10')])
            setTags(tags);
            setCourses(courses);
        }
        makeRequest().catch(e => toast("An error has occurred", {type: "error"}))
    }, [])
    return loading
        ? <LoadingWrapper><Spinner/></LoadingWrapper>
        : (
            <>
                <Grid classes={["pt-4"]}>
                    <Row>
                        <Col classes={["col-md-8", "offset-md-2", "col-sm-12"]}>
                            <Header classes={["text-center", "mt-4"]}>
                                Welcome to CourseShop
                            </Header>
                            <p
                                className="text-center mt-4"
                                style={{fontSize: 24, color: "#969494"}}
                            >
                                Resource of video programming lessons for developers. Take the
                                knowledge of your profile from us, because we are the best, bruh.
                                Really.
                            </p>
                        </Col>
                        <Col
                            classes={[
                                "col-md-6",
                                "offset-md-3",
                                "mt-md-5",
                                "mt-3",
                                "col-8",
                                "offset-2",
                            ]}
                        >
                            <Search/>
                        </Col>
                    </Row>
                </Grid>

                <BandComponent classes={["mt-5"]}>
                    <Grid classes={["pt-4", "pb-3"]} fluid>
                        <Subheader classes={["text-center", "pb-2"]} light>
                            Popular categories
                        </Subheader>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            maxWidth: 1570,
                            margin: '0px auto'
                        }}>
                            {tags.length > 0 ?
                                tags.map(tag => <MiniCard url={img} text={tag.tag} link={`/archive/${tag.tag}`}
                                                          key={tag.id}/>)
                                : <EmptyText>No items</EmptyText>
                            }
                        </div>
                        <ButtonWrapper className="pt-3">
                            <Link to="/categories"><Button>All categories</Button></Link>
                        </ButtonWrapper>
                    </Grid>
                </BandComponent>

                <Grid classes={["pt-4", "pb-5"]}>
                    <Row>
                        <Col>
                            <Subheader classes={["text-center", "mb-4"]}>
                                Recently added courses
                            </Subheader>
                            <Course>
                                {courses.map(course => (
                                    <Course.Item course={course} key={course.id}/>
                                ))}
                            </Course>
                            <ButtonWrapper className="pt-3">
                                <Link to='/archive'>
                                    <Button>All courses</Button>
                                </Link>
                            </ButtonWrapper>
                        </Col>
                    </Row>
                </Grid>
            </>
        );
}
