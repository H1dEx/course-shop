import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {AuthorCard} from "../../common/AuthorCard";
import {Grid, Row} from "../../common/Grid";
import {Search} from "../../common/Search";
import {useHttp} from "../../../hooks/http.hook";
import {ISource, ISourcePayload} from "../../../../types";

const CardWrapper = styled.div`
  max-width: 1566px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export function Source() {
    const {request} = useHttp();
    const [sources, setSources] = useState<ISource[]>([])
    useEffect(() => {
        const makeRequest = async () => {
            const {sources} = await request<ISourcePayload>('/sources');
            setSources(sources)
        }
        makeRequest()
    }, [])
    return (
        <>
            <Grid classes={["pt-4", "pb-4"]}>
                <Row>
                    <div className="col-lg-8 offset-lg-2 col-12">
                        <h1 className="text-center mt-4">Sources of courses</h1>
                        <p className="text-center mt-4">
                            This is a list of all course sources (authors) on coursehunter.
                            There are no words that can convey how much they love us!
                        </p>
                    </div>
                    <div className="col-lg-6 offset-lg-3 col-10 offset-1">
                        <Search/>
                    </div>
                </Row>
            </Grid>
            <Grid classes={["pb-5"]} fluid>
                <CardWrapper>
                    {sources.map(el => (<AuthorCard source={el} key={el.name}/>))}
                </CardWrapper>
            </Grid>
        </>
    );
}
