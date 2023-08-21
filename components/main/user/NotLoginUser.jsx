"use client"

import { BiLogIn } from "react-icons/bi"; 
import { AiOutlineUserAdd } from "react-icons/ai"; 

import Button from 'react-bootstrap/Button';


export default function notLoginUser() {
    return (
        <div className="mb-2 user">
            <Button variant="primary" size="lg">
                <AiOutlineUserAdd /> Sign Up
            </Button>
            <Button variant="secondary" size="lg">
                <BiLogIn /> Login
            </Button>
        </div>
    );
}
