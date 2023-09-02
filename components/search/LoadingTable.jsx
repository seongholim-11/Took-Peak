// ContentTable이 출력되기 전에 로딩 컴포넌트

import Placeholder from "react-bootstrap/Placeholder";
import Table from "react-bootstrap/Table";

import './search.scss'

export default function LoadingTable() {
    return (
        <div className="loadingTable">
            <Placeholder as="h2" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
            <Table>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>
                            <Placeholder as="span" animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                        </td>
                        <td>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={8} />
                            </Placeholder>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={8} />
                            </Placeholder>
                        </td>
                        <td>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={5} />
                            </Placeholder>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={7} />
                            </Placeholder>
                        </td>
                        <td>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={10} />
                            </Placeholder>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={3} />
                            </Placeholder>
                        </td>
                        <td>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={11} />
                            </Placeholder>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={4} />
                            </Placeholder>
                        </td>
                        <td>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
