'use client'

import Link from "next/link"

export default function ListItem({result}){

	return (
		<div>
		{ 
			result.map((a, i)=>{
				return (
					<div>
						<div className="list-item" key={i}>
							<Link prefetch={ false } href={`/detail/${result[i]._id}`}>
								<h4>{result[i].title}</h4>
							</Link>
							{/* <DetailLink /> */}
							<Link href={'/edit/'+ result[i]._id} > ✏️ </Link>
							<span onClick={(e)=>{ 

								// 📁query string과 URL parameter 사용한 삭제기능
								// 📁Dynamic route 사용된 파일뒤에 물음표 넣고 '작명=값' 을 해주면 된다. 
								// 📁추가 값을 넣을 경우 & 를 넣어주어라   Ex) fetch('/api/abc/id?a=1&b=2&c=3')
								// query string 은 fetch('/api/abc/id?a=1')
								fetch('/api/abc/'+ result[i]._id, { method : 'DELETE' })
								.then(()=>{
									e.target.parentElement.style.opacity = 0;
									setTimeout(() => {
										e.target.parentElement.style.display = 'none';
									}, 1000);
								})

								// 📁 fetch 삭제기능 ( pages > api > post > delete 파일 확인)
								// fetch('/api/post/delete', { method : 'DELETE', body : result[i]._id } )
								// .then((r)=>{ return r.json() })
								// .then(()=>{
								// 	e.target.parentElement.style.opacity = 0;
								// 		setTimeout(()=>{ 
								// 			e.target.parentElement.style.display = 'none'; 
								// 		},1000)
								// })

							}}>🗑️</span>
							<p>{a.content}</p>
							<p>( 제목을 누르면 상세페이지로, 연필 이미지를 누르면 수정페이지로 이동합니다. )</p>
						</div>
					</div>
				)
			})
			}
		</div>
	)
}