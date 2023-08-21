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
        <div className="mb-2 yetUser">
            <Button variant="primary" size="lg" onClick={handleShow}>
                <AiOutlineUserAdd /> Sign Up
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
                            <label htmlFor="name">username</label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                placeholder="username"
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
                <BiLogIn /> Login
            </Button>
        </div>
    );
}
