"use client";

// react
import { useState } from "react";
// components
import Email from "./SignUp/Email";
import Password from "./SignUp/Password";
import Specialize from "./SignUp/Specialize";
// bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Avatar from "./SignUp/Avatar";

export default function SignUp({ show, handleClose }) {
    // aws에 업로드된 이미지의 미리보기 url 저장
    let [src, setSrc] = useState("/image/main/user/Avatars.png");
    // 입력된 email 값
    const [emailValue, setEmailValue] = useState("");
    // 입력된 email 유효성 검사 결과
    const [isValidEmail, setIsValidEmail] = useState(false);
    // 입력된 password 값
    const [passwordValue, setPasswordValue] = useState("");
    // 입력된 password 유효성 검사 결과
    const [isValidPassword, setIsValidPassword] = useState(false);
    // 입력된 confirm password 값
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    // 입력된 confirm password 유효성 검사 결과
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);

    // form 입력 값들 서버에 전송 및 요청
    const Submit = async (e) => {
        e.preventDefault(); // 폼 기본 제출 동작 막기

        // 글 작성이 실패하거나 성공할 때 메시지를 전송하고 싶어서 함수로 만들었고
        // FormData() 함수가 제대로 작동하지 않아서 아래와 같은 방법을 사용함.

        // 서버에 보낼 data 저장
        let data = {};
        const name = e.target.name.value;
        const email = emailValue;
        const password = passwordValue;
        const specialize = e.target.specialize.value;
        const avatar = src;

        data = { name, email, password, avatar, specialize };

        // 제목과 내용이 비어있으면 경고 메시지 출력
        if (!name || !specialize) {
            alert("이름과 specialize는 필수 입력 사항입니다.");
            return;
        }
        if (isValidEmail && isValidPassword && confirmPasswordValue) {
            // fetch를 사용하여 데이터 서버로 전송
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // 성공적으로 서버에 전송됨
                // 필요한 처리를 수행
                const successMessage = await response.json();
                alert(successMessage);
                handleClose();
            } else {
                // 서버로부터 오류 응답을 받음
                const errorResponse = await response.json();
                alert(errorResponse);
                // 오류 처리
            }
        } else {
            alert("Email과 Password를 확인해주세요");
        }
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <div>
                    {/*회원가입 form */}
                    <form onSubmit={Submit}>
                        <Modal.Body>
                            <Avatar src={src} setSrc={setSrc} />
                            <label htmlFor="name">nickname</label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                placeholder="nickname"
                            />
                            <Email
                                isValidEmail={isValidEmail}
                                setEmailValue={setEmailValue}
                                setIsValidEmail={setIsValidEmail}
                            />
                            <Password
                                setPasswordValue={setPasswordValue}
                                setIsValidPassword={setIsValidPassword}
                                setConfirmPasswordValue={
                                    setConfirmPasswordValue
                                }
                                isValidConfirmPassword={isValidConfirmPassword}
                                setIsValidConfirmPassword={
                                    setIsValidConfirmPassword
                                }
                                passwordValue={passwordValue}
                                isValidPassword={isValidPassword}
                            />
                            <Specialize />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal>
        </>
    );
}
