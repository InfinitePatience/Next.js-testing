import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from './DetailLink.js'
import ListItem from "./ListItem.js";

export default async function List() {

	const client = await connectDB
  const db = client.db('forum')
  const result = await db.collection('post').find().toArray()
  // console.log(result)

	return (
		<div className="list-bg">
			<ListItem result={result}/>
    </div>
	)
}
