import React, {useEffect, useMemo, useState} from 'react'
import {BandComponent} from '../../common/BandComponent'
import {Course} from '../../common/CourseItem'
import {Grid, Row} from '../../common/Grid'
import {Search} from '../../common/Search'
import {useHttp} from "../../../hooks/http.hook";
import {ICourse, ICoursePayload} from "../../../../types";
import {toast} from "react-toastify";
import {EmptyText} from "../../common/EmptyText";
import {useScrollLoad} from "../../../hooks/loadOnScroll.hook";
import {useHistory, useLocation} from "react-router-dom";

export function Archive() {
    let {pathname} = useLocation();

    const [currentPage, setCurrentPage] = useState(1);
    const [countCourses, setCountCourses] = useState(0);
    const [filter, setFilter] = useState('');
    const [courses, setCourses] = useState<ICourse[]>([]);
    const {request, loading} = useHttp();
    useScrollLoad(() => {
        setCurrentPage((page) => page + 1)
    })

    useEffect(() => {
        const makeRequest = async () => {
            if (loading || (countCourses && countCourses === courses.length)) return;

            const path = pathname.split('/archive').length === 2 ? `${pathname.split('/archive')[1]}` : '';

            const {
                courses: gottenCourses,
                count
            } = await request<ICoursePayload>(`/courses${path}?page=${currentPage}&count=10`)
            console.log(path)
            setCourses(courses => [...courses, ...gottenCourses])
            setCountCourses(count)
        }
        makeRequest().catch(e => toast("An error has occurred", {type: "error"}))
    }, [currentPage])

    const filteredCourses = useMemo(() => {
        const temp = courses
            .filter(course => course.coursename.toLowerCase().includes(filter.toLowerCase()));
        return (temp.length === 0) ? (<EmptyText>No items</EmptyText>) :
            temp.map(course => (
                <Course.Item course={course} key={course.id}/>
            ))
    }, [courses, filter])

    console.log('RENDER')
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
                            <Search value={filter} handleFilter={setFilter}/>
                        </div>
                    </Row>
                </Grid>
            </BandComponent>
            <Grid classes={["pt-4", "pb-5"]}>
                <h3 className="mb-5 mt-4">{(filter === '') && 'All courses'}</h3>
                <Course>
                    {filteredCourses}
                </Course>
            </Grid>
        </>
    )
}
