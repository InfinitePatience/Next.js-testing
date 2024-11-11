import { connectDB } from "@/util/database";

export default async function handler(요청, 응답){
	if(요청.method == 'POST') {
		if(요청.body.title == ''|| 요청.body.content == ''){
			return 응답.status(500).json('둘 다 써라?')
		} 
	const client = await connectDB;
	const db = client.db('forum')
	const result = await db.collection('post').insertOne(요청.body)
	return 응답.status(200).redirect('/list')
	} 
}