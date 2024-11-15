// 서버기능(api) test 

import { connectDB } from "@/util/database"

export default function handler(request, response){
	console.log(123)
	// return response.status(200).json('처리완료')

	// const client = await connectDB;
	// const db = client.db('forum');
	// const result = await db.collection('post').find().toArray()
	// response.status(200).json(result)

	}