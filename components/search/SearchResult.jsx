// /search/page.js에서 검색결과 하나하나를 출력하는 컴포넌트

"use client";

// next
import Link from "next/link";
// bootstrap
import Button from "react-bootstrap/Button";
// scss
import './search.scss'

// search/page.js의 map 함수에서 데이터 받아옴
export default function SearchResult({ item }) {
    return (
        <div className="searchResult">
            <div className="row1">
                <div className="row1-1">
                    <span className="col1">{item.subTitle}</span>
                    <span className="col2">{`${item.address}(${item.telNo})`}</span>
                </div>
                <div className="row1-1">
                    <span className="col1">
                        {`${item.title}(${item.trprDegr})`}
                    </span>
                    <span className="col2">{`${item.traStartDate} ~ ${item.traEndDate}`}</span>
                </div>
            </div>
            <div className="row2">
                {/* 클릭하면 해당 검색결과의 상세페이지로 이동 */}
                <Link href={`/search/${item.trprId}?trprDegr=${item.trprDegr}`}>
                    <Button variant="primary">more</Button>
                </Link>
            </div>
        </div>
    );
}
