import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Edit(props){

	const client = await connectDB;
	const db = client.db('forum')
	const result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id)})
	
	
	return (
		<div className="p-20">
			<h4>수정페이지</h4>
			<form action="/api/post/edit" method="POST">
				<input type="text" name="title" defaultvalue={result.title} />
				<input type="text" name="content" defaultValue={result.content} />
				<input type="text" style={{display: 'none'}} name="_id" defaultValue={result._id} />
				<button type="submit">전송</button>
			</form>
		</div>
	)
}