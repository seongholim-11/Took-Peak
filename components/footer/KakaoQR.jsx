'use client'

import { useState } from 'react';
import { RiKakaoTalkFill } from "react-icons/ri"; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./footer.scss";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        <RiKakaoTalkFill />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>KakaoTalk QRcode</Modal.Title>
        </Modal.Header>
        <Modal.Body className='kakao'>
          <img src="/image/footer/QRcode.jpg" alt="QRcode" className='kakaoImg'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;