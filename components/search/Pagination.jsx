// 검색 결과에 대한 페이지네이션 컴포넌트

import Pagination from "react-js-pagination";

import './search.scss'

// /search/page.js로부터 데이터 받음
export default function SearchPagination({page, setPage, searchPageCnt}) {


    const handlePageChange = (page) => {
        setPage(page);
        // window.scrollTo({ top: 0, behavior: "smooth" });
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
