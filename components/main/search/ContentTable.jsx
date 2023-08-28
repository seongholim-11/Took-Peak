import Table from "react-bootstrap/Table";

export default function ContentTable({information}) {
    return (
        <div className="detail">
            <h2>{information.trprNm}</h2>
            <div className="content">
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <td>주소</td>
                            <td>{`${information.addr1} (${information.addr2})`}</td>
                        </tr>
                        <tr>
                            <td>홈페이지</td>
                            <td>
                                <a
                                    href={`${information.hpAddr}`}
                                    target="_blank"
                                >
                                    {information.hpAddr}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td>{information.trprChapTel}</td>
                        </tr>
                        <tr>
                            <td> NCS 직무분류</td>
                            <td>
                                {`${information.ncsNm}(${information.ncsCd})`}
                            </td>
                        </tr>
                        <tr>
                            <td> NCS 적용여부</td>
                            <td>
                                {information.ncsYn === "Y" ? "적용" : "미적용"}
                            </td>
                        </tr>
                        <tr>
                            <td> 훈련비</td>
                            <td>{`${(information.perTrco).toLocaleString('ko-KR')}원`}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
