import React from "react";
import Link from "next/link";

export default function TabContent({ boardData, activeTab }) {
    return (
        <>
            {boardData.length > 0 ? (
                <div className="mainBoardWrap">
                    {boardData.map((item, idx) => {
                        return (
                            <Link href={`/board/${activeTab}/${item._id}`} key={idx}>
                                <div className="content">
                                    <div className="title">{item.title}</div>
                                    <div className="authorCreate">
                                        {item.author} | {item.createdAt}
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
