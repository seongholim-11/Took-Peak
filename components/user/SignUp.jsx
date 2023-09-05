"use client";

import { useState } from "react";
// bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function SignUp({ show, handleClose }) {
    // 게시글에 첨부할 수 있는 최대 이미지 크기
    const MAX_FILE_SIZE = 1048576; // 1MB

    // aws에 업로드된 이미지의 미리보기 url 저장
    let [src, setSrc] = useState("/image/main/user/Avatars.png");
    const [emailValue, setEmailValue] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);

    // 입력값이 변경될 때 호출되는 이벤트 핸들러
    const handleEmailChange = (e) => {
        const value = e.target.value;

        // 정규식을 사용하여 이메일 주소 유효성 검사
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailRegex.test(value);

        setEmailValue(value); // 입력값 업데이트
        setIsValidEmail(isValid); // 이메일 유효성 상태 업데이트
    };

    // 입력값이 변경될 때 호출되는 이벤트 핸들러
    const handlePasswordChange = (e) => {
        const value = e.target.value;

        // 정규식을 사용하여 이메일 주소 유효성 검사
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        const isValid = passwordRegex.test(value);

        setPasswordValue(value); // 입력값 업데이트
        setIsValidPassword(isValid); // 이메일 유효성 상태 업데이트
    };

    // 입력값이 변경될 때 호출되는 이벤트 핸들러
    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;

        if (passwordValue === value) {
            setConfirmPasswordValue(value); // 입력값 업데이트
            setIsValidConfirmPassword(true); // 이메일 유효성 상태 업데이트
        } else {
            setIsValidConfirmPassword(false); // 이메일 유효성 상태 업데이트
        }
    };

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
                            <label htmlFor="avatar">Profile picture</label>
                            <input
                                id="avatar"
                                /* 서버로 데이터를 전송할 때 사용 */
                                name="avatar"
                                type="file"
                                /* 이미지 파일만 선택 가능 */
                                accept="image/*"
                                onChange={async (e) => {
                                    /* 내용이 1개인 배열 */
                                    let file = e.target.files[0];
                                    if (file.size > MAX_FILE_SIZE) {
                                        setSrc("/image/main/user/Avatars.png");
                                        alert("파일 크기가 1MB를 초과합니다.");
                                        return;
                                    }
                                    /* URI로 데이터를 전달하기 위해서 문자열을 인코딩 */
                                    let filename = encodeURIComponent(
                                        file.name
                                    );
                                    /* 서버에 선택한 파일 이름을 전달하여 업로드를 위한 필수 정보를 요청 */
                                    let res = await fetch(
                                        "/api/post/avatar?file=" + filename
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
                                    console.log(result);

                                    if (result.ok) {
                                        /* 이미지의 URL을 업데이트 */
                                        setSrc(result.url + "/" + filename);
                                    } else {
                                        console.log("실패");
                                    }
                                }}
                            />
                            <img src={src} />
                            {/* 이미지 url를 서버에 보내기 위해 input */}
                            <input type="hidden" name="avatar" value={src} />
                            <label htmlFor="name">nickname</label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                placeholder="nickname"
                            />
                            <label htmlFor="email">
                                E-mail{" "}
                                {isValidEmail ? (
                                    <span
                                        style={{
                                            color: "blue",
                                            marginLeft: "10px",
                                            fontSize: "0.5rem",
                                        }}
                                    >
                                        알맞은 Email 형식입니다.
                                    </span>
                                ) : (
                                    <span
                                        style={{
                                            color: "red",
                                            marginLeft: "10px",
                                            fontSize: "0.5rem",
                                        }}
                                    >
                                        알맞은 Email 형식으로 입력해주세요.
                                    </span>
                                )}
                            </label>
                            <input
                                name="email"
                                id="email"
                                type="text"
                                placeholder="example@email.com"
                                onChange={handleEmailChange}
                            />
                            <label htmlFor="password">
                                Password{" "}
                                {isValidPassword ? (
                                    <span
                                        style={{
                                            color: "blue",
                                            marginLeft: "10px",
                                            fontSize: "0.5rem",
                                        }}
                                    >
                                        알맞은 비밀번호입니다.
                                    </span>
                                ) : (
                                    <span
                                        style={{
                                            color: "red",
                                            marginLeft: "10px",
                                            fontSize: "0.5rem",
                                        }}
                                    >
                                        영어와 숫자를 포함하여 6자 이상
                                        입력해주세요.
                                    </span>
                                )}
                            </label>
                            <input
                                name="password"
                                id="password"
                                type="password"
                                placeholder="password"
                                onChange={handlePasswordChange}
                            />
                            <label htmlFor="Confirmpassword">
                                Password{" "}
                                {isValidConfirmPassword && isValidPassword ? (
                                    <span
                                        style={{
                                            color: "blue",
                                            marginLeft: "10px",
                                            fontSize: "0.5rem",
                                        }}
                                    >
                                        비밀번호가 일치합니다.
                                    </span>
                                ) : passwordValue.length > 0 ? (
                                    <span
                                        style={{
                                            color: "red",
                                            marginLeft: "10px",
                                            fontSize: "0.5rem",
                                        }}
                                    >
                                        비밀번호가 불일치합니다.
                                    </span>
                                ) : (
                                    ""
                                )}
                            </label>
                            <input
                                name="password"
                                id="Confirmpassword"
                                type="password"
                                placeholder="confirm password"
                                onChange={handleConfirmPasswordChange}
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
                                    <label htmlFor="option3">
                                        {" "}
                                        데이터엔지니어
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="option4"
                                        name="specialize"
                                        value="백엔드/서버개발"
                                    />
                                    <label htmlFor="option4">
                                        백엔드/서버개발
                                    </label>
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
