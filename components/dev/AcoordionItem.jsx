import Accordion from "react-bootstrap/Accordion";
import { BiLinkExternal } from "react-icons/bi";

import Link from "next/link";

export default function AcoordionItem({ item, idx }) {
    return (
        <Accordion.Item eventKey={idx} key={idx}>
            <Accordion.Header>
                {item.title}
                <Link
                    href={item.link}
                    target="_blank"
                    className="accordionButton"
                >
                    <BiLinkExternal />
                </Link>
            </Accordion.Header>
            <Accordion.Body>
                <pre>{item.content}</pre>
            </Accordion.Body>
        </Accordion.Item>
    );
}
