import { FC } from "react"
import { Post } from "../models/post.interface"

interface PostItemProps {
  post: Post,
  remove: (post: Post) => void,
  update: (post: Post) => void,
}

export const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {

  const handleUpdateClick = (): void => {
    const title = prompt('New title?');

    if(!title) return;

    update({ id: post.id, title, body: post.body});
  }

  return (
    <div className="post__item">
      <div>
        {post.id}. {post.title}
      </div>
      <button onClick={handleUpdateClick}>UPDATE</button>
      <button onClick={() => remove(post)}>DELETE</button>
    </div>
  )
}