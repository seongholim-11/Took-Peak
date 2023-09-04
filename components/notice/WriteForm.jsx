/* write 페이지의 자식 컴포넌트, 게시글 작성 폼 */

"use client";

// react&next
import React, { useState, useEffect } from "react";
// bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
// scss
import "./write.scss";

function WriteForm() {
    // 로딩 중(spin) 유뮤를 위한 state
    const [loading, setLoading] = useState(true);

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
        const view = e.target.view.value;

        data = { title, content, view };

        // 제목과 내용이 비어있으면 경고 메시지 출력
        if (!title || !content) {
            alert("제목과 내용은 필수 입력 사항입니다.");
            return;
        }

        // fetch를 사용하여 데이터 서버로 전송
        const response = await fetch("/api/post/notice", {
            method: "POST",
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // 성공적으로 서버에 전송됨
            // 필요한 처리를 수행
            const successMessage = await response.json();
            alert(successMessage);
        } else {
            // 서버로부터 오류 응답을 받음
            const errorResponse = await response.json();
            alert(errorResponse);
            // 오류 처리
        }
    };

    return (
        <Container>
            {loading ? (
                <div className="loading">
                    <Spinner animation="border" size="lg" />
                </div>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="titleNsubmit">
                        <h3>공지사항 작성</h3>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
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
