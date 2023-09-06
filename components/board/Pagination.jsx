// 페이지네이션 컴포넌트

"use client";

import Pagination from "react-js-pagination";
// zustand
import usePageStore from "@/stores/page";

export default function SearchPagination({ searchPageCnt }) {
    const { pageValue, setPageValue } = usePageStore();
    const handlePageChange = (page) => {
        setPageValue(page);
    };

    return (
        <Pagination
            activePage={pageValue}
            itemsCountPerPage={9}
            totalItemsCount={searchPageCnt}
            pageRangeDisplayed={9}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    );
}
