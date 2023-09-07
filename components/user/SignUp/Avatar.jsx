import React, { useState } from "react";

export default function Avatar({ setImgInfo, setImgFile }) {
    // 게시글에 첨부할 수 있는 최대 이미지 크기
    const MAX_FILE_SIZE = 1048576; // 1MB

    const [imageUrl, setImageUrl] = useState("/image/write/Frame.png");

    // 이미지 파일을 선택했을 때 호출되는 함수
    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const blob = new Blob([selectedFile], { type: selectedFile.type });
            const url = URL.createObjectURL(blob);
            setImageUrl(url);

            // // URL 해제 (메모리 누수 방지)
            // URL.revokeObjectURL(url);
        } else {
            setImageUrl("");
        }
    };
    return (
        <>
            {" "}
            <label htmlFor="avatar">Profile picture</label>
            <input
                id="avatar"
                /* 서버로 데이터를 전송할 때 사용 */
                name="avatar"
                type="file"
                /* 이미지 파일만 선택 가능 */
                accept="image/*"
                onChange={async (e) => {
                    /* 내용이 1개인 배열 */
                    let file = e.target.files[0];
                    setImgFile(file);
                    if (file.size > MAX_FILE_SIZE) {
                        setImageUrl("/image/write/Frame.png");
                        alert("파일 크기가 1MB를 초과합니다.");
                        return;
                    }
                    handleImageChange(e);
                    /* URI로 데이터를 전달하기 위해서 문자열을 인코딩 */
                    let filename = encodeURIComponent(file.name);
                    /* 서버에 선택한 파일 이름을 전달하여 업로드를 위한 필수 정보를 요청 */
                    let res = await fetch("/api/post/board?file=" + filename);
                    /* 서버 응답을 JSON 형태로 파싱하여 필요한 정보를 추출 */
                    res = await res.json();
                    setImgInfo(res);
                }}
            />
            <img src={imageUrl} />
        </>
    );
}
