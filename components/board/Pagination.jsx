"use client";

import Pagination from "react-js-pagination";

export default function SearchPagination({ page, setPage, searchPageCnt }) {
    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={searchPageCnt}
            pageRangeDisplayed={9}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    );
}
