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
    // 아바타 이미지 정보(url)
    const [imgInfo, setImgInfo] = useState({});
    // 아바타 이미지 정보(input)
    const [imgFile, setImgFile] = useState({});

    async function imageUpload() {
        const res = imgInfo;
        const file = imgFile;

        //S3 업로드
        /* new FormData() => 폼을 쉽게 보내도록 도와주는 객체 */
        const formData = new FormData();

        /* 필수 필드와 선택한 파일을 FormData에 추가, Object.entries() // 모든 프로퍼티와 값을 배열로 반환함 */
        Object.entries({
            ...res.fields,
            file,
        }).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            /* FormData를 서버 URL로 POST 요청하여 파일을 S3에 업로드 */
            const result = await fetch(res.url, {
                method: "POST",
                body: formData,
            });

            if (result.ok) {
                /* URI로 데이터를 전달하기 위해서 문자열을 인코딩 */
                const filename = encodeURIComponent(file.name);
                /* 이미지의 URL을 업데이트 */
                const imageUrl = result.url + "/" + filename;
                return imageUrl; // 이미지 업로드가 성공하면 URL을 반환
            } else {
                console.error("이미지 업로드 실패");
                return null; // 실패 시 null 반환
            }
        } catch (error) {
            console.error("이미지 업로드 오류:", error);
            return null;
        }
    }

    // form 입력 값들 서버에 전송 및 요청
    const Submit = async (e) => {
        e.preventDefault(); // 폼 기본 제출 동작 막기

        // 이미지 업로드를 기다림
        const imageUrl = await imageUpload();
        console.log("🚀 ~ file: SignUp.jsx:77 ~ Submit ~ imageUrl:",typeof imageUrl)

        // 글 작성이 실패하거나 성공할 때 메시지를 전송하고 싶어서 함수로 만들었고
        // FormData() 함수가 제대로 작동하지 않아서 아래와 같은 방법을 사용함.

        // 서버에 보낼 data 저장
        let data = {};
        const name = e.target.name.value;
        const email = emailValue;
        const password = passwordValue;
        const specialize = e.target.specialize.value;

        data = { name, email, password, avatar:imageUrl, specialize };
        console.log("🚀 ~ file: SignUp.jsx:89 ~ Submit ~ data:", data)

        // name과 specialize이 비어있으면 경고 메시지 출력
        if (!name) {
            alert("nickname은 필수 입력 사항입니다.");
            return;
        }
        if (!specialize) {
            alert("specialize는 필수 입력 사항입니다.");
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
                            <Avatar
                                setImgInfo={setImgInfo}
                                setImgFile={setImgFile}
                            />
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
