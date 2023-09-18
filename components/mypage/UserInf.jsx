'use client'

// 로그인한 상태에서 출력되는 user 정보 컴포넌트    

// react&next
import { useEffect, useState } from "react";
// bootstrap
import Spinner from "react-bootstrap/Spinner";
// scss
import './mypage.scss'

export default function User() {
    // 로그인한 유저 정보
    const [userInformation, setUserInformation] = useState({
        avatar: "/image/main/user/avatar.png",
        email: "123456@gmail.com",
        name: "Nickname",
        specialize: "skill",
    });

    // 로딩 유무
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 서버로부터 유저 정보 받아오기
        const userInf = async () => {
            try {
                const response = await fetch(`/api/get/loginuser`);
                const data = await response.json();
                setUserInformation(data);
                setLoading(false);
            } catch (error) {
                console.error("유저 데이터를 가져오는 중 오류 발생:", error);
            }
        };

        userInf();
    }, []);

    return (
        <div className="mypageUserInf">
            {loading ? (
                <Spinner animation="border" size="lg" style={{color: '#0070f3'}}/>
            ) : (
                <>
                    <img src={userInformation.avatar} alt="profil" />
                    <div className="mypageUser">
                        <div className="mypageNickname"><span className="blue">Nickname:</span> @{userInformation.name}</div>
                        <div className="mypageEmail"><span className="blue">Email:</span> {userInformation.email}</div>
                    </div>
                    <div className="mypageSpecialize">
                        <span><span className="blue">Specialize:</span> {userInformation.specialize}</span>
                    </div>
                </>
            )}
        </div>
    );
}
