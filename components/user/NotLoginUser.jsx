"use client";

// react&next
import { useState } from "react";
import { signIn } from "next-auth/react";
// bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// react-icons
import { BiLogIn } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
// scss
import './user.scss'

export default function notLoginUser() {
    // 모달창 유무
    const [show, setShow] = useState(false);
    // 회원가입 시 입력하는 프로필 사진
    const [src, setSrc] = useState("/image/main/user/Avatars.png");

    // 모달창을 열고 닫는 function
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
                    {/*회원가입 form */}
                    <form method="POST" action="/api/auth/signup">
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
