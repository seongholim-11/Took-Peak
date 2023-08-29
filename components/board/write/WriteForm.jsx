"use client";

import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./write.scss";

function WriteForm() {
    const [src, setSrc] = useState("");
    const [selectValue, setSelectValue] = useState("");

    const changeValue = (e) => {
        setSelectValue(e.target.value);
    };
    return (
        <Container>
            <Form>
                <Form.Group className="titleNsubmit">
                    <h3>게시글 작성</h3>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
                <Form.Group>
                    <Form.Select
                        aria-label="Default select example"
                        onChange={changeValue}
                    >
                        <option>게시판을 선택해 주세요.</option>
                        <option value="free">자유게시판</option>
                        <option value="colla">협업게시판</option>
                        <option value="port">포트폴리오게시판</option>
                        <option value="qna">질문게시판</option>
                    </Form.Select>
                </Form.Group>
                {selectValue === "port" ? (
                    <Form.Group>
                        <Form.Group>
                            <Form.Label>사진을 첨부해주세요</Form.Label>
                            <Form.Control
                                type="file"
                                id="board"
                                /* 서버로 데이터를 전송할 때 사용 */
                                name="boardimage"
                                /* 이미지 파일만 선택 가능 */
                                accept="image/*"
                                onChange={async (e) => {
                                    /* 내용이 1개인 배열 */
                                    let file = e.target.files[0];
                                    /* URI로 데이터를 전달하기 위해서 문자열을 인코딩 */
                                    let filename = encodeURIComponent(
                                        file.name
                                    );
                                    /* 서버에 선택한 파일 이름을 전달하여 업로드를 위한 필수 정보를 요청 */
                                    let res = await fetch(
                                        "/api/post/board?file=" + filename
                                    );
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
                        </Form.Group>
                        <img src={src} />
                    </Form.Group>
                ) : (
                    <div></div>
                )}
                <Form.Group className="title">
                    <Form.Control
                        type="text"
                        placeholder="글 제목을 입력해주세요"
                    />
                </Form.Group>
                <Form.Group className="content">
                    <Form.Control
                        as="textarea"
                        placeholder="글 내용을 입력해주세요"
                        rows={3}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
}

export default WriteForm;
