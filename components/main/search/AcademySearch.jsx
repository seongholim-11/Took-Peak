import { BiSearchAlt2 } from "react-icons/bi"; 
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AcademySearch() {
    return (
        <div className="search">
            <Form>
                <Form.Label htmlFor="search"><BiSearchAlt2 /> Academy Search</Form.Label>
                <div className="searchInput">
                    <Form.Control type="text" placeholder="Enter the name of the academy" id="search"/>
                    <Button variant="primary">SEARCH</Button>
                </div>
            </Form>
        </div>
    );
}
