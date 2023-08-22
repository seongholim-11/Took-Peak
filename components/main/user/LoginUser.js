"use client";

import { useEffect, useState } from "react";

export default function User() {
    const [userInformation, setUserInformation] = useState({
        avartar: "/image/main/user/avatar.png",
        email: "123456@gmail.com",
        name: "@Nickname",
        specialize: "skill",
    });

    useEffect(() => {
        const userInf = async () => {
            try {
                const response = await fetch(`/api/get/loginuser`);
                const data = await response.json();
                setUserInformation(data);
            } catch (error) {
                console.error("댓글 데이터를 가져오는 중 오류 발생:", error);
            }
        };

        userInf();
    }, []);

    return (
        <div className="user">
            <img src={userInformation.avatar} alt="profil" />
            <div className="userInf">
                <div className="nickname">@{userInformation.name}</div>
                <div className="email">{userInformation.email}</div>
            </div>
            <div className="skill">
                <span>{userInformation.specialize}</span>
            </div>
        </div>
    );
}
