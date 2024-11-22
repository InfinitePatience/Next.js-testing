import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

export default async function Home() {

  const client = await connectDB
  const db = client.db('forum')
  const result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div>
      <h1>안녕하세요!!! 나는 홈 입니다!!!!</h1>
      <p>🚀 Next.js를 공부하며 테스트 중입니다.</p>
      <p>✏️ 글 작성, 수정, 삭제가 가능합니다.  ( List 페이지 클릭해 보세요? ) </p>
      <p>⚙️ DB 는 mongodb 를 사용하였습니다.</p>
    </div>
  );
}
