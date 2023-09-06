// 페이지네이션 컴포넌트

"use client";

import Pagination from "react-js-pagination";

export default function SearchPagination({ page, setPage, searchPageCnt }) {
    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={9}
            totalItemsCount={searchPageCnt}
            pageRangeDisplayed={9}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    );
}
