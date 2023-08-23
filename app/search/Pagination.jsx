import React, { useState } from "react";

import Pagination from "react-js-pagination";

export default function SearchPagination({page, setPage, searchPageCnt}) {


    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={searchPageCnt}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    );
}
