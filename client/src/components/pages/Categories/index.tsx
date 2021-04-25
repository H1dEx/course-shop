import React, {useEffect, useState} from 'react';
import {Grid, Row} from "../../common/Grid";
import {Search} from "../../common/Search";
import {ITag} from "../../../../types";
import {useHttp} from "../../../hooks/http.hook";
import styled from "styled-components";

const CardWrapper = styled.div`
  max-width: 1566px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Categories = () => {
    const [tags, setTags] = useState<ITag[]>([]);
    const {request, loading} = useHttp();
    useEffect(() => {
        const makeRequest = async () => {
            const tags = await request<ITag[]>('')
            setTags(tags)
        }
    }, [])

    return (
        < >

            <Grid classes={["pt-4", "pb-4"]}>
                <Row>
                    <div className="col-lg-8 offset-lg-2 col-12">
                        <h1 className="text-center">List of Categories</h1>
                        <p className="text-center mt-4">
                            We are constantly working to replenish courses in existing categories and to organize
                            new ones!
                        </p>
                    </div>
                    <div className="col-lg-6 offset-lg-3 col-10 offset-1">
                        <Search/>
                    </div>
                </Row>
            </Grid>
            <Grid classes={["pb-5"]} fluid>
                <CardWrapper>

                    COntent will be here....
                </CardWrapper>
            </Grid>
        </ >
    )
}