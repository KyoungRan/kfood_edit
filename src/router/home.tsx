import styled from "styled-components"
import { useEffect, useState } from "react";
import { fetch_food_codes, fetch_food_data, type Food, type FoodData } from "../api";
import { makeRandoms, splitImage } from "../lib/util";
import WebcamCapture from "../componets/webcam";
import { NavLink } from "react-router";
import HowTo from "../componets/howto";
import { PageTemplate } from "../componets";

import imgLogo from '../assets/logo.png';

const Box = styled.div`
    margin-top: 7rem;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    h1{
        margin-top: 12px;
        font-size: 24px;
        font-weight: bold;
    }
    h2{
        margin-top: 12px;
        font-size: 14px;
    }
`;
const SearchBox = styled.div`
    margin-top: 20px;
    padding: 20px 40px;
    // background-color: ${props => props.theme.colors.background};
    background-color: #ffffff !important;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 24px;
    border: 0.1px solid #dee2e6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const BannerTitle = styled.div`
    margin-top: 30px;
    width: 100%;
    min-width: 400px;
    max-width: 640px;
    display: flex;
    padding-bottom: 12px;
    border-bottom: 2px solid gray;
    align-self: center;
    align-items: center;
    font-color: "#862e9c";
    img {
        width: 40px;
        height: auto;
    }
    span{
        font-size: 22px;
        margin-left: 24px;
    }
`;
const ImageBannerBox = styled.div`
    margin-top: 4px;
    width: 100%;
    min-width: 400px;
    max-width: 640px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
`;
const BannerImage = styled.div<{$path:string}>`
    flex-basis: 23%;
    flex-grow: 1;
    margin: 1%;
    min-width: 240px;
    max-width: 320px;
    width: 100%;
    min-height: 160px;
    max-height: 240px;
    height: 100%;
    background-image: ${props => `url(${props.$path})`};
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    margin-bottom: 1rem;
`;

const TitleStyles = styled.div`
    text-align: center;
    margin-bottom: 2rem;
    h1 {
        color: #9a30ae;
        font-size: 35px;
    }
    h2 {
        margin-top: 30px;
        font-size: 24px;
        color: #343a40;
    }
`;

export default function Home(){
    // const [_,setFoodData] = useState<FoodData[]>([]);
    const [rFoods,setRFoods] = useState<Food[]>([]);
    useEffect(()=> {
    (async () => {
        const _food_data : FoodData[] = await fetch_food_codes();
        // setFoodData(_food_data.slice(1))
        const imageSize = 2;
        const random_idx = makeRandoms(_food_data.length,imageSize);
        const _rFood = [];
        for(let i = 0;i < imageSize;i++){
            const jsondata = await fetch_food_data(_food_data[random_idx[i]]);
            _rFood.push(jsondata)//jsondata['이미지'].split('/').at(-1)
        }
        setRFoods(_rFood);
    })();
  },[]);
const foodImage = (food : Food) => {
    if(food === null) return '';
    return splitImage(food.image)
}
return(
    <Box>
        <TitleStyles>
            <h1>사진 한 장으로 한식 이름·레시피·활용까지</h1>
            <h2>음식 사진을 업로드하세요</h2>
        </TitleStyles>
        <SearchBox>
            <WebcamCapture />
        </SearchBox>
        <HowTo />
        <BannerTitle>
            <img src={imgLogo} />
            <span>오늘의 추천 요리</span>
        </BannerTitle>
        <span>요리가 즐거워지는 추천 요리로 오늘도 요리해요!</span>
        <ImageBannerBox>
            {
                rFoods.map((data,i) => 
                    <div key={i} style={{
                        display:'flex', flexDirection:'column'
                    }}>
                        <NavLink to={`/kfood/detail/${data.code}`} key={i}>
                            <BannerImage $path={`https://www.hansik.or.kr/resources/img/recipe/${foodImage(data)}`} />
                        </NavLink>
                        <span style={{
                            fontSize:'18px',
                            textAlign:'center'
                        }}>{data.menu}</span>
                    </div>
                )
            }
        </ImageBannerBox>
    </Box>
)
}