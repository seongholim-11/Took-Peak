/* write 페이지의 자식 컴포넌트, 게시글 작성 폼 */

"use client";

// react&next
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// components
import NotLoginUser from "@/components/user/NotLoginUser";
// bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
// scss
import "./write.scss";

function WriteForm() {
    // 게시글에 첨부할 수 있는 최대 이미지 크기
    const MAX_FILE_SIZE = 1048576; // 1MB
    // aws에 업로드된 이미지의 미리보기 url 저장
    const [src, setSrc] = useState("/image/write/Frame.png");
    // 게시글이 업로드될 카테고리가 저장되는 state
    const [selectValue, setSelectValue] = useState("");
    // 로딩 중(spin) 유뮤를 위한 state
    const [loading, setLoading] = useState(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    // 업로드 완료 후 페이지 이동을 위한 useRouter
    const router = useRouter();

    // 선택된 카테고리를 state에 저장하는 function
    const changeValue = (e) => {
        setSelectValue(e.target.value);
    };

    // 페이지의 로드가 끝나면 loading 종료
    useEffect(() => {
        setLoading(false);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // 폼 기본 제출 동작 막기

        // 글 작성이 실패하거나 성공할 때 메시지를 전송하고 싶어서 함수로 만들었고
        // FormData() 함수가 제대로 작동하지 않아서 아래와 같은 방법을 사용함.

        // 서버에 보낼 data 저장
        let data = {};
        const title = e.target.title.value;
        const content = e.target.content.value;
        const board = selectValue;
        const view = e.target.view.value;

        // 포트폴리오 게시글만 사진이 첨부되기 때문에 if문으로 구분
        if (src) {
            const image = src;
            data = { title, content, board, view, image };
        } else {
            data = { title, content, board, view };
        }

        // 제목과 내용이 비어있으면 경고 메시지 출력
        if (!title || !content) {
            alert("제목과 내용은 필수 입력 사항입니다.");
            return;
        }

        // fetch를 사용하여 데이터 서버로 전송
        const response = await fetch("/api/post/upload", {
            method: "POST",
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // 성공적으로 서버에 전송됨
            // 필요한 처리를 수행
            const successMessage = await response.json();
            alert(successMessage);
            router.push(`/board/${selectValue}`);
        } else {
            // 서버로부터 오류 응답을 받음
            const errorResponse = await response.json();
            alert(errorResponse);
            setShow(true);
            // 오류 처리
        }
    };

    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SIGN UP & LOGIN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NotLoginUser />
                </Modal.Body>
            </Modal>
            {loading ? (
                <div className="loading">
                    <Spinner animation="border" size="lg" />
                </div>
            ) : (
                <Form onSubmit={handleSubmit}>
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
                            <option value="collaboration">협업게시판</option>
                            <option value="portfolio">포트폴리오게시판</option>
                            <option value="question">질문게시판</option>
                        </Form.Select>
                        <input
                            type="hidden"
                            name="board"
                            value={`${selectValue}`}
                        />
                    </Form.Group>
                    {selectValue === "portfolio" ? (
                        <Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    포트폴리오 사진을 첨부해주세요.{" "}
                                    <sub style={{ color: "red" }}>
                                        *사진의 크기는 1MB 이하만 첨부
                                        가능합니다.
                                    </sub>
                                </Form.Label>
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
                                        if (file.size > MAX_FILE_SIZE) {
                                            alert(
                                                "파일 크기가 1MB를 초과합니다."
                                            );
                                            return;
                                        }
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

                                        if (result.ok) {
                                            /* 이미지의 URL을 업데이트 */
                                            setSrc(result.url + "/" + filename);
                                        } else {
                                            console.log("실패");
                                        }
                                    }}
                                />
                            </Form.Group>
                            {/* 사진 미리보기 */}
                            <div className="preview">
                                <img src={src} />
                            </div>
                            {/* 업로드된 사진 url을 저장하기 위한 input 태그 */}
                            <input type="hidden" name="image" value={src} />
                        </Form.Group>
                    ) : (
                        <div></div>
                    )}
                    <Form.Group className="title">
                        <Form.Control
                            type="text"
                            placeholder="글 제목을 입력해주세요"
                            name="title"
                        />
                    </Form.Group>
                    <Form.Group className="content">
                        <Form.Control
                            as="textarea"
                            placeholder="글 내용을 입력해주세요"
                            rows={3}
                            name="content"
                        />
                    </Form.Group>
                    {/* 조회수를 위한 input 태그 */}
                    <input type="hidden" name="view" value={0} />
                </Form>
            )}
        </Container>
    );
}

export default WriteForm;
