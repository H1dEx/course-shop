import React, {useEffect, useMemo, useState} from 'react';
import {Grid, Row} from "../../common/Grid";
import {Search} from "../../common/Search";
import {ICategoryPayload, ITag} from "../../../../types";
import {useHttp} from "../../../hooks/http.hook";
import styled from "styled-components";
import {toast} from "react-toastify";
import logo from "../../../assets/icons/css.png"
import {EmptyText} from "../../common/EmptyText";

const CardWrapper = styled.div`
  max-width: 1500px;
  padding: 0 20px;
  display: grid;
  margin: 0 auto;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, 210px);
  justify-content: center;
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
`

const CardTitle = styled.h3`
  color: #686868;
  font-size: 16px;
  text-align: center;
`

const Card = styled.div`
  padding: 30px 20px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  box-shadow: 0 4px 14px rgb(150 148 148 / 25%);
`

export const Categories = () => {
    const [tags, setTags] = useState<ITag[]>([])
    const [filter, setFilter] = useState('')
    const {request, loading} = useHttp()
    const [count, setCount] = useState(0)

    useEffect(() => {
        const makeRequest = async () => {
            const {tags, count} = await request<ICategoryPayload>('/categories');
            setTags(tags);
            setCount(count);
        }
        makeRequest().catch(e => toast("An error has occurred", {type: "error"}))
    }, [])

    const filteredTags = useMemo(() => {
        const temp = tags
            .filter(tag => tag.tag.toLowerCase().includes(filter.toLowerCase()));
        return (temp.length === 0) ? (<EmptyText>No items</EmptyText>) :
            temp.map(tag => (
                <Card key={tag.id}>
                    <Icon src={logo}/>
                    <CardTitle>{tag.tag}</CardTitle>
                </Card>
            ))
    }, [tags, filter])

    return (
        < >

            <Grid classes={["pt-4", "pb-4"]}>
                <Row>
                    <div className="col-lg-8 offset-lg-2 col-12">
                        <h1 className="text-center mt-4">List of Categories</h1>
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
                    {tags
                        .filter(tag => tag.tag.toLowerCase().includes(filter.toLowerCase()))
                        .map(tag => (
                            <Card key={tag.id}>
                                <Icon src={logo}/>
                                <CardTitle>{tag.tag}</CardTitle>
                            </Card>
                        )) || 'NO ITEMS'}
                    {filteredTags}

                </CardWrapper>
            </Grid>
        </>
    )
}