import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Spinner from "react-bootstrap/Spinner";

export default function User() {
    const [userInformation, setUserInformation] = useState({
        avatar: "/image/main/user/avatar.png",
        email: "123456@gmail.com",
        name: "Nickname",
        specialize: "skill",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userInf = async () => {
            try {
                const response = await fetch(`/api/get/loginuser`);
                const data = await response.json();
                setUserInformation(data);
                setLoading(false);
            } catch (error) {
                console.error("댓글 데이터를 가져오는 중 오류 발생:", error);
            }
        };

        userInf();
    }, []);

    return (
        <div className="user">
            {loading ? (
                <Spinner animation="border" size="lg" />
            ) : (
                <>
                    <img src={userInformation.avatar} alt="profil" />
                    <div className="userInf">
                        <div className="nickname">@{userInformation.name}</div>
                        <div className="email">{userInformation.email}</div>
                    </div>
                    <div className="specialize">
                        <span>{userInformation.specialize}</span>
                    </div>
                    <button className="triangle" onClick={() => signOut()}>
                        <span>LogOut</span>
                    </button>
                </>
            )}
        </div>
    );
}
