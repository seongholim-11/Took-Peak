import React from "react";
import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import NoticeDetail from "@/components/notice/NoticeDetail";


export default async function page(props) {
    const { id } = props.params;

    let db = (await connectDB).db("forum");
    let result = await db.collection("notice").findOne({ _id: new ObjectId(id) });
    result._id = result._id.toString();

    return (
        <div>
            <NoticeDetail result={result} />
        </div>
    );
}
