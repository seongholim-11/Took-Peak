import React from "react";
import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import Detail from "@/components/board/detail/PortDetail";

export default async function page(props) {
    const { id } = props.params;

    let db = (await connectDB).db("forum");
    let result = await db.collection("post").findOne({ _id: new ObjectId(id) });

    return <Detail result={result} />;
}
