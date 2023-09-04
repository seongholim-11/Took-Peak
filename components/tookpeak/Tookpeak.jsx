"use client";

import React from "react";
import Container from "react-bootstrap/Container";

import "./tookpeak.scss";

export default function tookpeak() {
    return (
        <Container>
            <div className="tookpeakWrap">
                <video
                    src="/image/tookpeak/tookpeak.mp4"
                    muted
                    autoPlay
                ></video>
                <div className="tookpeakContents">
                    <div className="left">
                        <h4>커뮤니티 개설 동기</h4>
                    </div>
                    <div className="right">
                        <h4>주요기능 및 역할</h4>
                    </div>
                    <div className="left">
                        <h4>앞으로의 계획</h4>
                    </div>
                </div>
            </div>
        </Container>
    );
}
