"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import { BiArrowBack } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Back({ result }) {
    console.log("🚀 ~ file: Back.jsx:11 ~ Back ~ result:", result)
    const [edit, setEdit] = useState(false);
    const session = useSession();

    const router = useRouter();
    function onBackClick() {
        router.back();
    }

    useEffect(() => {
        // 글쓴이와 현재 로그인된 유저 비교
        if (session.data) {
            let loginUser = session.data.user.email;
            if (loginUser == result.email) {
                setEdit(true);
            } else {
                setEdit(false);
            }
        }
    }, [session]);

    return (
        <div className="ped">
            {/* 뒤로가기 버튼을 누르면 해당 글의 카테고리 페이지로 이동 */}
            <div className="p">
                <Button variant="outline-primary" onClick={onBackClick}>
                    <BiArrowBack />
                </Button>
            </div>
            {edit ? (
                <div className="ed">
                    <Link href={'/edit/'+ result._id}><Button variant="outline-primary">Edit</Button></Link>
                    <Button variant="outline-danger">Delete</Button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
