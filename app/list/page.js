import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from './DetailLink.js'

export default async function List() {

	const client = await connectDB
  const db = client.db('forum')
  const result = await db.collection('post').find().toArray()
  // console.log(result)
	return (
		<div className="list-bg">

			{ 
			result.map((a, i)=>{
				return (
					<>
						<div className="list-item" key={i}>
							<Link prefetch={ false } href={`/detail/${result[i]._id}`}>
								<h4>{result[i].title}</h4>
							</Link>
							{/* <DetailLink /> */}
							<Link href={`/edit/${result[i]._id}`} > ✏️ </Link>
							<p>{a.content}</p>
						</div>
					</>
				)
			})
			}

    </div>
	)
}
