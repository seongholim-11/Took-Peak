// 게시판 상세 페이지

// react
import React from "react";
// mongoDB
import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
// components
import PortDetail from "@/components/board/detail/PortDetail";
import Comment from '@/components/board/detail/Comment'

export default async function page(props) {
    // props로 url 정보 받아오기
    const { id } = props.params;

    // db에서 해당 게시글 정보 받아오기
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
    // result._id = result._id.toString();

    // db에 저장되어 있는 view 정보가 string이라서 $inc 명령어가 오류 발생
    // update를 통해 number로 형변환
    let number = await db.collection("post").updateOne(
        { _id: new ObjectId(id) }, // 업데이트할 문서를 선택하는 조건
        { $set: { view: Number(result.view) } }
     )

     // 상세페이지로 접속 시 DB의 view 1씩 증가
    let view = await db.collection("post").updateOne(
        { _id: new ObjectId(id) }, // 업데이트할 문서를 선택하는 조건
        { $inc: { view: 1 } }
     )

    return (
        <div>
            <PortDetail result={result} />
            <Comment result={result} />
        </div>
    );
}
