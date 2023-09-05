import React from "react";

export default function Specialize() {
    return (
        <>
            <p>specialize</p>
            <div className="specialize">
                <div>
                    <input
                        type="radio"
                        id="option1"
                        name="specialize"
                        value="게임개발"
                    />
                    <label htmlFor="option1">게임개발</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="option2"
                        name="specialize"
                        value="데이터분석"
                    />
                    <label htmlFor="option2">데이터분석</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="option3"
                        name="specialize"
                        value="데이터엔지니어"
                    />
                    <label htmlFor="option3"> 데이터엔지니어</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="option4"
                        name="specialize"
                        value="백엔드/서버개발"
                    />
                    <label htmlFor="option4">백엔드/서버개발</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="option5"
                        name="specialize"
                        value="보안"
                    />
                    <label htmlFor="option5">보안</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="option6"
                        name="specialize"
                        value="앱개발"
                    />
                    <label htmlFor="option6">앱개발</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="option7"
                        name="specialize"
                        value="퍼블리셔"
                    />
                    <label htmlFor="option7"> 퍼블리셔</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="option8"
                        name="specialize"
                        value="프론트엔드"
                    />
                    <label htmlFor="option8">프론트엔드</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="option9"
                        name="specialize"
                        value="풀스택개발"
                    />
                    <label htmlFor="option9">풀스택개발</label>
                </div>
            </div>
        </>
    );
}
