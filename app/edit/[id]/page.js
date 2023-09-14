import EditForm from "@/components/edit/EditForm";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function page(props) {
    console.log("🚀 ~ file: page.js:5 ~ page ~ props:", props);
    const db = (await connectDB).db("forum"); // connectDB()를 호출하여 DB 연결을 얻습니다.
    const result = await db
        .collection("post")
        .findOne({ _id: new ObjectId(props.params.id) });
    return (
        <>
            <EditForm result={result}/>
        </>
    );
}
