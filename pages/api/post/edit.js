import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답){ 
	if(요청.method == 'POST'){
		let 바꿀거 = { 
			title : 요청.body.title , 
			content : 요청.body.content
		}
		const client = await connectDB;
		const db = client.db('forum')
		const result = await db.collection('post').updateOne(
		{ _id: new ObjectId(요청.body._id)},
		{$set : 바꿀거})
		// 숫자만 있는 데이터를 증감만 시키고 싶다면 $inc : 1 식으로 넣는 방법도 있다.
	}
	응답.status(200).redirect('/list')
}