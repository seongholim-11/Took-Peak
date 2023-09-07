// react&next
import React from "react";
import Link from "next/link";

import TitleLength from "./TitleLength";

// components/main/Board 컴포넌트에게 넘겨받는 누른 탭메뉴와 해당 탭메뉴 데이터
export default function TabContent({ boardData, activeTab }) {
    return (
        <>
            {/* 넘겨받은 데이터가 비어있으면 "업로드된 글이 없습니다." 출력 */}
            {boardData.length > 0 ? (
                <div className="mainBoardWrap">
                    {boardData.map((item, idx) => {
                        let createdAt = item.createdAt.substr(0, 10);
                        return (
                            /* 글을 누르면 해당 글의 상세 페이지로 이동 */
                            <Link
                                href={`/board/${activeTab}/${item._id}`}
                                key={idx}
                            >
                                <div className="content">
                                    <TitleLength item={item} />
                                    <div className="authorCreate">
                                        {item.author} | {createdAt}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div>업로드된 글이 없습니다.</div>
            )}
        </>
    );
}
