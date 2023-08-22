"use client";

import { BiLogIn } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function notLoginUser() {
    const [show, setShow] = useState(false);
    const [src, setSrc] = useState("/image/main/user/Avatars.png");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="yetUser">
            <Button variant="primary" size="lg" onClick={handleShow}>
                <AiOutlineUserAdd /> SIGN UP
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <div>
                    <form method="POST" action="/api/auth/signup">
                        <Modal.Body>
                            <label htmlFor="avatar">Profile picture</label>
                            <input
                                id="avatar"
                                name="avatar"
                                type="file"
                                accept="image/*"
                                onChange={async (e) => {
                                    let file = e.target.files[0];
                                    let filename = encodeURIComponent(
                                        file.name
                                    );
                                    let res = await fetch(
                                        "/api/post/avatar?file=" + filename
                                    );
                                    res = await res.json();

                                    //S3 업로드
                                    const formData = new FormData();
                                    Object.entries({
                                        ...res.fields,
                                        file,
                                    }).forEach(([key, value]) => {
                                        formData.append(key, value);
                                    });
                                    let result = await fetch(res.url, {
                                        method: "POST",
                                        body: formData,
                                    });
                                    console.log(result);

                                    if (result.ok) {
                                        setSrc(result.url + "/" + filename);
                                    } else {
                                        console.log("실패");
                                    }
                                }}
                            />
                            <img src={src} />
                            <input type="hidden" name="avatar" value={src} />
                            <label htmlFor="name">nickname</label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                placeholder="nickname"
                            />
                            <label htmlFor="email">E-mail</label>
                            <input
                                name="email"
                                id="email"
                                type="text"
                                placeholder="example@email.com"
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                id="password"
                                type="password"
                                placeholder="at least 8 characters"
                            />
                            <p>specialize</p>
                            <div className="specialize">
                                <div>
                                    <input
                                        type="radio"
                                        id="option1"
                                        name="specialize"
                                        value="게임개발"
                                    />
                                    <label htmlFor="option1">게임개발</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="option2"
                                        name="specialize"
                                        value="데이터분석"
                                    />
                                    <label htmlFor="option2">데이터분석</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="option3"
                                        name="specialize"
                                        value="데이터엔지니어"
                                    />
                                    <label htmlFor="option3"> 데이터엔지니어</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="option4"
                                        name="specialize"
                                        value="백엔드/서버개발"
                                    />
                                    <label htmlFor="option4">백엔드/서버개발</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="option5"
                                        name="specialize"
                                        value="보안"
                                    />
                                    <label htmlFor="option5">보안</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="option6"
                                        name="specialize"
                                        value="앱개발"
                                    />
                                    <label htmlFor="option6">앱개발</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="option7"
                                        name="specialize"
                                        value="퍼블리셔"
                                    />
                                    <label htmlFor="option7"> 퍼블리셔</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="option8"
                                        name="specialize"
                                        value="프론트엔드"
                                    />
                                    <label htmlFor="option8">프론트엔드</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="option9"
                                        name="specialize"
                                        value="풀스택개발"
                                    />
                                    <label htmlFor="option9">풀스택개발</label>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={handleClose}
                            >
                                Submit
                            </Button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal>
            <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                    signIn();
                }}
            >
                <BiLogIn /> LOGIN
            </Button>
        </div>
    );
}
