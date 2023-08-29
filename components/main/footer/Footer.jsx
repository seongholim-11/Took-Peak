import { SiTistory } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import { FaMountain } from "react-icons/fa";

import './footer.scss'

export default function Footer() {
    return (
        <Container>
            <div className="footerWrap">
                <div className="column1">
                    <div className="logo">
                        <FaMountain />
                        Took-Peak
                    </div>

                    <p className="copyright">Copyright © 2023 Took-peak</p>
                </div>
                <div className="column2">
                    <div className="category">
                        <Link href={"/"} className="menu">
                            Took-Peak
                        </Link>
                        <Link href={"/"} className="submenu">
                            Took-Peak
                        </Link>
                        <Link href={"/"} className="submenu">
                            History
                        </Link>
                        <Link href={"/"} className="submenu">
                            Notice
                        </Link>
                    </div>
                    <div className="category">
                        <Link href={"/"} className="menu">
                            Search
                        </Link>
                        <Link href={"/"} className="submenu">
                            학원 검색
                        </Link>
                    </div>
                    <div className="category">
                        <Link href={"/"} className="menu">
                            Message Board
                        </Link>
                        <Link href={"/"} className="submenu">
                            자유게시판
                        </Link>
                        <Link href={"/"} className="submenu">
                            협업게시판
                        </Link>
                        <Link href={"/"} className="submenu">
                            포트폴리오 게시판
                        </Link>
                        <Link href={"/"} className="submenu">
                            질문 게시판
                        </Link>
                    </div>
                    <div className="category">
                        <Link href={"/"} className="menu">
                            About Dev
                        </Link>
                        <Link href={"/"} className="submenu">
                            개발 팁
                        </Link>
                        <Link href={"/"} className="submenu">
                            개발 기술
                        </Link>
                        <Link href={"/"} className="submenu">
                            CS
                        </Link>
                        <Link href={"/"} className="submenu">
                            개발 면접
                        </Link>
                    </div>
                    <div className="connect">
                        <p>connect</p>
                        <div className="info">
                            <address>Phone: 010-4463-9110</address>
                            <address>E-mail: damadu01@gmail.com</address>
                        </div>
                        <Link
                            href={"https://github.com/seongholim-11/took-peak"}
                            target="_blank"
                        >
                            <AiFillGithub />
                        </Link>
                        <Link
                            href={"https://limseongjang.tistory.com/"}
                            target="_blank"
                        >
                            <SiTistory />
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}
