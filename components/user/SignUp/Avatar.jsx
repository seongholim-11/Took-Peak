import React from "react";

export default function Avatar({ src, setSrc }) {
    // 게시글에 첨부할 수 있는 최대 이미지 크기
    const MAX_FILE_SIZE = 1048576; // 1MB
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
                    if (file.size > MAX_FILE_SIZE) {
                        setSrc("/image/main/user/Avatars.png");
                        alert("파일 크기가 1MB를 초과합니다.");
                        return;
                    }
                    /* URI로 데이터를 전달하기 위해서 문자열을 인코딩 */
                    let filename = encodeURIComponent(file.name);
                    /* 서버에 선택한 파일 이름을 전달하여 업로드를 위한 필수 정보를 요청 */
                    let res = await fetch("/api/post/avatar?file=" + filename);
                    /* 서버 응답을 JSON 형태로 파싱하여 필요한 정보를 추출 */
                    res = await res.json();

                    //S3 업로드
                    /* new FormData() => 폼을 쉽게 보내도록 도와주는 객체 */
                    const formData = new FormData();

                    /* 
                        필수 필드와 선택한 파일을 FormData에 추가 
                        Object.entries() // 모든 프로퍼티와 값을 배열로 반환함
                    */
                    Object.entries({
                        ...res.fields,
                        file,
                    }).forEach(([key, value]) => {
                        formData.append(key, value);
                    });

                    /* FormData를 서버 URL로 POST 요청하여 파일을 S3에 업로드 */
                    let result = await fetch(res.url, {
                        method: "POST",
                        body: formData,
                    });
                    console.log(result);

                    if (result.ok) {
                        /* 이미지의 URL을 업데이트 */
                        setSrc(result.url + "/" + filename);
                    } else {
                        console.log("실패");
                    }
                }}
            />
            <img src={src} />
            {/* 이미지 url를 서버에 보내기 위해 input */}
            <input type="hidden" name="avatar" value={src} />
        </>
    );
}
