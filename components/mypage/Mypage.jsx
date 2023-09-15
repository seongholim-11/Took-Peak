"use client";

// react
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
// 로그인, 로그아웃 기능을 위해 import
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
// react-icons
import { MdContactPage } from "react-icons/md";
import { MdOutlineAppRegistration } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
// react-bootstrap
import Button from "react-bootstrap/Button";
// scss
import "./mypage.scss";

export default function Mypage() {
    const [show, setShow] = useState(false);

    let session = useSession();

    return (
        <div className="mypageWrap">
            {show ? (
                <div className="buttonWrap" style={{ display: "block" }}>
                    {session.data ? (
                        <div className="buttons">
                            <Link href={'/mypage'}>
                                <button>
                                    <MdContactPage />
                                    <p>my page</p>
                                </button>
                            </Link>
                            <button
                                onClick={() => {
                                    signOut();
                                }}
                            >
                                <BiLogOut />
                                <p>logout</p>
                            </button>
                        </div>
                    ) : (
                        <div className="buttons">
                            <button
                                onClick={() => {
                                    signIn();
                                }}
                            >
                                <BiLogIn />
                                <p>login</p>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="buttonWrap" style={{ display: "none" }}></div>
            )}
            <Button
                variant="primary"
                className="mypage"
                onClick={() => {
                    setShow(!show);
                }}
            >
                {" "}
                <CgProfile />
            </Button>
        </div>
    );
}
