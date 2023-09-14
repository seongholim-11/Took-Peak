"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BiArrowBack } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Back({ result }) {
    const [edit, setEdit] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deletePost = () => {
        fetch("/api/post/delete", {
            method: "DELETE",
            body: JSON.stringify({ id: result._id }), // body를 객체 형태로 전달
            headers: {
                "Content-Type": "application/json", // JSON 데이터를 전송하기 위한 헤더 설정
            },
        })
            .then((response) => {
                if (response.ok) {
                    // 성공적으로 삭제되었을 때 페이지 이동
                    handleClose();
                    router.push("/board/" + result.board);
                } else {
                    // 오류 처리
                    console.error("Error deleting post:", response.statusText);
                }
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    };

    const session = useSession();

    const router = useRouter();
    function onBackClick() {
        router.back();
    }

    useEffect(() => {
        // 글쓴이와 현재 로그인된 유저 비교
        if (session.data) {
            let loginUser = session.data.user.email;
            if (loginUser == result.email) {
                setEdit(true);
            } else {
                setEdit(false);
            }
        }
    }, [session]);

    return (
        <div className="ped">
            {/* 뒤로가기 버튼을 누르면 해당 글의 카테고리 페이지로 이동 */}
            <div className="p">
                <Button variant="outline-primary" onClick={onBackClick}>
                    <BiArrowBack />
                </Button>
            </div>
            {edit ? (
                <div className="ed">
                    <Link href={"/edit/" + result._id}>
                        <Button variant="outline-primary">Edit</Button>
                    </Link>
                    <Button variant="outline-danger" onClick={handleShow}>
                        Delete
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>글 삭제 확인 메시지</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{display: 'block'}}>
                            정말 이 글을  <span style={{ color: "red" }}>삭제</span>하시겠습니까?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={deletePost}>
                            Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
