'use client'

import Link from "next/link";

import Button from "react-bootstrap/Button";

export default function SearchResult({item, idx}) {
    return (
        <div key={idx} className="searchResult">
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
                <Link href={`/search/${item.trprId}`}>
                    <Button variant="primary">more</Button>
                </Link>
            </div>
        </div>
    );
}
