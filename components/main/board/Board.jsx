import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import './board.scss'

export default function Board() {
  return (
    <div className='board'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">자유</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">협업</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">포트폴리오</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">질문</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col className='tabBody'>
              <Tab.Content>
                <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="third">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="fourth">Second tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    </div>
  )
}
