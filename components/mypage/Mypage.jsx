"use client";
import { MdContactPage } from "react-icons/md";
import { MdOutlineAppRegistration } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import Button from "react-bootstrap/Button";
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
                            <button>
                                <MdContactPage />
                                <p>my page</p>
                            </button>
                            <button>
                                <BiLogOut />
                                <p>logout</p>
                            </button>
                        </div>
                    ) : (
                        <div className="buttons">
                            <button>
                                <BiLogIn />
                                <p>login</p>
                            </button>
                            <button>
                                <MdOutlineAppRegistration />
                                <p>sign up</p>
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
