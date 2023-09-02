/* /search/Comment 컴포넌트로부터 받은 댓글 데이터를 통해 댓글을 출력하는 컴포넌트 */

// react
import React from "react";
// scss
import './search.scss'

export default function AllComment({ allComment }) {
    return (
        <div>
            {allComment.length > 0
                ? allComment.map((item, idx) => {
                      return (
                          <div key={idx} className="commentWrap">
                              <div className="author">
                                  {item.author}
                                  <span className="time">{item.createdAt}</span>
                              </div>
                              <div className="comment">{item.comment}</div>
                          </div>
                      );
                  })
                : "후기가 없습니다."}
        </div>
    );
}
