'tookpeak 커뮤니티를 소개하는 내용을 담은 컴포넌트'

"use client";

// react
import React from "react";
// bootstrap
import Container from "react-bootstrap/Container";
// react-icons
import { BsFillSendFill } from "react-icons/bs";
// scss
import "./tookpeak.scss";

export default function tookpeak() {
    return (
        <Container>
            <div className="tookpeakWrap">
                <div className="tookpeakVideo">
                    <video
                        src="/image/tookpeak/tookpeak.mp4"
                        muted
                        autoPlay
                    ></video>
                    <img
                        src="/image/tookpeak/reflect.png"
                        alt="Reflection"
                        className="reflect"
                    ></img>
                </div>
                <div className="tookpeakContents">
                    <div className="message">
                        <div className="left animation1">
                            <h4>커뮤니티 개설 동기</h4>
                            <p>
                                국비지원 교육 과정으로 프로그래밍 수업을 듣는
                                학생들이 양질의 정보를 공유하고 서로의 부족함을
                                채워주며 함께 발전하기 위한 커뮤니티의 존재가
                                필요하다고 느껴서 개설하게 되었습니다.
                            </p>
                        </div>
                        <div className="right animation2">
                            <h4>주요기능 및 역할</h4>
                            <ul>
                                <li>정보 및 지식 공유</li>
                                <li>소통 및 협업</li>
                                <li>긍정적인 경쟁으로의 동기부여</li>
                            </ul>
                        </div>
                        <div className="left animation3">
                            <h4>앞으로의 계획</h4>
                            <p>
                                회원들의 역량 향상과 커뮤니티 활성화를 위해
                                지속적인 개선을 할 수 있도록 노력할 것 입니다.
                            </p>
                        </div>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Took-Peak for Developer"/>
                        <button><BsFillSendFill /></button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
