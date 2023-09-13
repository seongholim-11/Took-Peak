"use client";

// react&next
import { useState } from "react";
import { signIn } from "next-auth/react";
// bootstrap
import Button from "react-bootstrap/Button";

// react-icons
import { BiLogIn } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
// scss
import "./user.scss";
import SignUp from "./SignUp";

export default function notLoginUser() {
    // 입력된 email 값
    const [emailValue, setEmailValue] = useState("");
    // 모달창 유무
    const [show, setShow] = useState(false);
    // 회원가입 시 입력하는 프로필 사진
    const [src, setSrc] = useState("/image/main/user/Avatars.png");

    // 모달창을 열고 닫는 function
    const handleClose = () => {
        setShow(false);
        setEmailValue("");
    };
    const handleShow = () => setShow(true);
    return (
        <div className="yetUser">
            <Button variant="primary" size="lg" onClick={handleShow}>
                <AiOutlineUserAdd /> SIGN UP
            </Button>
            <SignUp
                show={show}
                src={src}
                setSrc={setSrc}
                handleClose={handleClose}
                emailValue={emailValue}
                setEmailValue={setEmailValue}
            />
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
