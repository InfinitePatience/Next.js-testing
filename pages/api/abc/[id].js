import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답){
	if(요청.method === 'DELETE'){
		console.log(요청.query)
		const client = await connectDB;
		const db = client.db('forum')
		let result = await db.collection('post').deleteOne({_id: new ObjectId(요청.query.id)})
	}
	응답.status(200).json()
}

// console.log(요청.query) 값을 출력해보면
// { id: '67406b513c27ca39987c2cc8' } 이런식으로 뜰거다. 
// 여기서 id는 /api/abc/[id] 파일위치이다. 
// [id] 위치에 mongoDB에 저장된 값에 아이디가 뜨게 설정 해놨다.
// list > ListItem 파일을 확인해보자.