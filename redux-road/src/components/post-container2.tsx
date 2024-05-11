import { useEffect, useState } from "react";
import { postAPI } from "../services/post-service"
import { PostItem } from "./post-item";

export const PostContainer2 = () => {
  const [limit, setLimit] = useState(10);
  const {data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);

  useEffect(() => {
    setTimeout(() => setLimit(5), 10000);
  }, []);

  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Идёт Загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts && posts.map(post =>
          <PostItem post={post} key={post.id}/>  
        )}
      </div>
    </div>
  )
}