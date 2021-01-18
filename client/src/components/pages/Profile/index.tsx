import React from 'react';
import {Grid} from "../../common/Grid";
import {Subheader} from "../../common/Header";
import {Button} from "../../common/Button";
import {BandComponent} from "../../common/BandComponent";
import styled from "styled-components";
import img from '../../../assets/icons/profile.png';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  width: 96px;
  height: 96px;
`

export const Profile = () => {
    return (
        <BandComponent classes={["mt-5"]}>
            <Grid classes={["pt-4", "pb-3"]} fluid>
                <ImageWrapper>
                    <Image src={img}/>
                </ImageWrapper>
                <Subheader classes={["text-center", "pb-2"]} light>
                    tetest@gmail.com
                </Subheader>

                <Button>All categories</Button>
            </Grid>
        </BandComponent>
    )
}