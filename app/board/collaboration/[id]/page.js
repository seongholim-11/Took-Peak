import React from "react";
import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import Detail from "@/components/board/detail/Detail";
import { useRouter } from "next/router";

export default async function page(props) {
    const router = useRouter();
    const { id } = props.params;

    let db = (await connectDB).db("forum");
    let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
    result._id = result._id.toString()
    console.log("🚀 ~ file: page.js:14 ~ page ~ result._id:", result._id)
    console.log("🚀 ~ file: page.js:13 ~ page ~ result:", result)

    return <Detail result={result} />;
}
