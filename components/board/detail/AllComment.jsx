import React from "react";

import "./comment.scss";

// Comment 컴포넌트로부터 props로 배열로 이루어진 댓글 데이터를 받아옴.
export default function AllComment({ allComment }) {
    return (
        <>
            {/* 댓글이 없을 수 있어서 삼항연산자를 사용 */}
            {allComment.length > 0
                ? /* 글쓴이, 날짜, 댓글 내용 출력 */
                  allComment.map((item, idx) => {
                    let createdAt = item.createdAt.substr(0, 10);
                      return (
                          <div key={idx} className="commentWrap">
                              <div className="author">
                                  {item.author}
                                  <span className="time">{createdAt}</span>
                              </div>
                              <div className="content">{item.comment}</div>
                          </div>
                      );
                  })
                  /* 댓글이 없다면 "댓글이 없습니다." 출력 */
                : "댓글이 없습니다."}
        </>
    );
}
