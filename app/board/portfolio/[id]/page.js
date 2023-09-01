import React from "react";
import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import PortDetail from "@/components/board/detail/PortDetail";
import Comment from '@/components/board/detail/Comment'

export default async function page(props) {
    const { id } = props.params;

    let db = (await connectDB).db("forum");
    let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
    result._id = result._id.toString();

    return (
        <div>
            <PortDetail result={result} />
            <Comment result={result} />
        </div>
    );
}
