import styled from "styled-components";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const HowBox = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    .title{
        color: #862e9c;
        font-size: 28px;
        font-weight: bold;
    }
    .how{
        display: flex;
        gap: 40px;
    }
`;

const HowStage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #862e9c;   /* 테두리 색상 */
        background-color: transparent; /* 배경 투명 */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .stage {
        font-size: 18px;
    }
    .desc {
        font-size: 16px;
    }
`;

const HowSvg = styled.svg`
    width: 30px;
    height: 30px;
    fill: #862e9c;   /* 아이콘 색상 */
`;

// const HowStage = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 12px;
//     div{
//         width: 60px;
//         height: 60px;
//         border-radius: 50%;
//         background-color: #ffe3e3;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .stage{
//         font-size: 14px;
//     }
//     .desc{
//         font-size: 12px
//     }
// `;
// const HowSvg = styled.svg`
//     width: 30px;
//     height: 30px;
//     fill: #c2255c;
// `;

export default function HowTo(){
    return(
    <HowBox>
        <span className="title">사용법</span>
        <div className="how">
            <HowStage>
                <div>
                    <HowSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32S0 334.3 0 352l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"/>
                    </HowSvg>
                </div>
                <span className="stage">1. 사진 업로드</span>
                <span className="desc">한국 음식 사진을 업로드해주세요.</span>
            </HowStage>
            <HowStage>
                <div>
                    <HowSvg>
                        <ImageSearchIcon sx={{ fontSize: 24, color: "#862e9c" }} />
                    </HowSvg>
                </div>
                <span className="stage">2. AI 분석</span>
                <span className="desc">AI가 음식을 자동으로 인식합니다.</span>
            </HowStage>
            <HowStage>
                <div>
                    <HowSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M352 0c0-17.7-14.3-32-32-32S288-17.7 288 0l0 64-96 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-224c0-53-43-96-96-96l-96 0 0-64zM160 368c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM64 224c0-17.7-14.3-32-32-32S0 206.3 0 224l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm544-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z"/>
                    </HowSvg>
                </div>
                <span className="stage">3. 레시피 확인</span>
                <span className="desc">레시피와 추천 요리를 확인하세요.</span>
            </HowStage>
        </div>
    </HowBox>

    )
}