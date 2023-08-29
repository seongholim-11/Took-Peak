"use client";

import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./write.scss";

function WriteForm() {
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
                    <Form.Select aria-label="Default select example">
                        <option>게시판을 선택해 주세요.</option>
                        <option value="free">자유게시판</option>
                        <option value="colla">협업게시판</option>
                        <option value="port">포트폴리오게시판</option>
                        <option value="qna">질문게시판</option>
                    </Form.Select>
                </Form.Group>

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
