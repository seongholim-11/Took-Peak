import React, { useState, useEffect } from "react";

export default function TabContent({ item }) {
    const [titleLength, setTitleLength] = useState(50); // 초기값
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [retitle, setRetitle] = useState(""); // retitle을 상태로 변경
    const newWindowWidth = window.innerWidth;

    useEffect(() => {
        // 화면 크기에 따라 제목 길이를 동적으로 변경
        function handleResize() {
            setWindowSize(newWindowWidth);
            if (newWindowWidth > 992) {
                setTitleLength(50);
            } else if (newWindowWidth > 769 && newWindowWidth < 991) {
                setTitleLength(20);
            } else if (newWindowWidth > 576 && newWindowWidth < 768) {
                setTitleLength(15);
            } else {
                setTitleLength(10);
            }
        }

        // 화면 크기 변경 이벤트 리스너 등록
        window.addEventListener("resize", handleResize);

        // 컴포넌트 언마운트 시 리스너 제거
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [newWindowWidth]); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 이펙트를 실행

    useEffect(() => {
        setRetitle(item.title.substr(0, titleLength)); // retitle 상태 업데이트
    }, [item.title, titleLength]);

    return (
        <>
            <div className="title">
                {item.title.length > titleLength ? `${retitle}...` : item.title}
            </div>
        </>
    );
}
