"use client";

import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";

import Container from "react-bootstrap/Container";

export default function List() {
    return (
        <Container className="boardlist">
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td>글 발행 일</td>
                        <td>글쓴이</td>
                        <td>조회수</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}
