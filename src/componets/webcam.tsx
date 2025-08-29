import { useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import { Svg } from "./styled_components";
import { FileUploader } from "react-drag-drop-files";
import { base64ToBlob } from "../lib/image_util";
import { useNavigate } from "react-router";

import MuiBox from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ImageIcon from "@mui/icons-material/Image";
import UploadIcon from "@mui/icons-material/Upload";

const ImageUploader = styled.div`
    width: 400px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;


const StyledFileUploader = styled(FileUploader)`
    border: 2px dashed #da77f2 !important;
    color: #da77f2 !important;
    font-size: 16px !important;

    svg {
        fill: #da77f2 !important;
    }
`;


const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`;

export default function WebcamCapture() {
    const navigate = useNavigate();
    const webcamRef = useRef<Webcam>(null);
    const [file, setFile] = useState<File | File[] | null>(null);

    const handleChange = (selected_file: File | File[]) => {
        setFile(selected_file);
        console.log(selected_file);
    };

    const [value, setValue] = useState("1");
    const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const capture = () => {
        if (value === "1") {
            const imageSrc = webcamRef.current?.getScreenshot();
            if (!imageSrc) {
                alert("이미지 캡쳐가 되지 않았습니다. 다시 시도해주세요!");
                return;
            }
            const _img_blob = base64ToBlob(imageSrc, "image/jpeg");
            const _filename = `webcam_capture_${Date.now()}.jpeg`;
            const _file = new File([_img_blob], _filename, {
                type: "image/jpeg",
            });
            navigate("/kfood/recommend", { state: { image: _file } });
        } else {
            if (!file) {
                alert("파일이 선택되지 않았습니다.");
                return;
            }
            navigate("/kfood/recommend", { state: { image: file } });
            setFile(null);
        }
    };

    return (
        <>
            <MuiBox sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                    <MuiBox sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={handleChangeTabs}
                            aria-label="lab API tabs example"
                            sx={{
                                width: "100%",
                                "& .MuiTabs-flexContainer": {
                                    display: "flex",
                                    justifyContent: "space-around",
                                },
                                "& .MuiTabs-indicator": { backgroundColor: "#ae3ec9" },
                            }}
                        >
                            <Tab
                                label="카메라"
                                value="1"
                                icon={<AddAPhotoIcon sx={{ fontSize: 24, marginRight: "8px" }} />}
                                sx={{
                                    flexDirection: "row",
                                    padding: "12px 24px",
                                    color: "#868e96",
                                    "&.Mui-selected": { color: "#ae3ec9" },
                                }}
                            />
                            <Tab
                                label="이미지"
                                value="2"
                                icon={<ImageIcon sx={{ fontSize: 24, marginRight: "8px" }} />}
                                sx={{
                                    flexDirection: "row",
                                    padding: "12px 24px",
                                    color: "#868e96",
                                    "&.Mui-selected": { color: "#ae3ec9" },
                                }}
                            />
                        </TabList>
                    </MuiBox>

                    {/* 카메라 탭 */}
                    <TabPanel value="1">
                        <Webcam
                            audio={false}
                            width={400}
                            height={300}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={{
                                width: 400,
                                height: 300,
                                facingMode: "user",
                            }}
                            disablePictureInPicture={false}
                        />
                        <ButtonWrapper>
                            <Button
                                onClick={capture}
                                variant="outlined"
                                startIcon={<UploadIcon sx={{ fontSize: 24 }} />}
                                sx={{
                                    fontSize: 16,
                                    width: "150px",
                                    borderColor: "#da77f2",
                                    color: "#862e9c",
                                    "&:hover": {
                                        backgroundColor: "#da77f2",
                                        borderColor: "#da77f2",
                                        color: "#fff",
                                    },
                                }}
                            >
                                촬영
                            </Button>
                        </ButtonWrapper>
                    </TabPanel>

                    {/* 이미지 업로드 탭 */}
                    <TabPanel value="2">
                        <ImageUploader>
                            <StyledFileUploader
                                handleChange={handleChange}
                                name="file"
                                multiple={false}
                                types={["JPG", "PNG", "GIF"]}
                                label="이미지 파일을 업로드하세요!"
                                uploadedLabel="이미지 파일 선택 완료!"
                            />
                            {file && !Array.isArray(file) && <span>( {file.name} )</span>}
                        </ImageUploader>
                        <ButtonWrapper>
                            <Button
                                onClick={capture}
                                variant="outlined"
                                startIcon={<UploadIcon sx={{ fontSize: 24 }} />}
                                sx={{
                                    fontSize: 16,
                                    width: "150px",
                                    borderColor: "#da77f2",
                                    color: "#862e9c",
                                    "&:hover": {
                                        backgroundColor: "#da77f2",
                                        borderColor: "#da77f2",
                                        color: "#fff",
                                    },
                                }}
                            >
                                업로드
                            </Button>
                        </ButtonWrapper>
                    </TabPanel>
                </TabContext>
            </MuiBox>
        </>
    );
}
