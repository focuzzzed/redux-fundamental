import { postAPI } from "../services/post-service"
import { PostItem } from "./post-item";

export const PostContainer = () => {
  const {data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
  const [createPost] = postAPI.useCreatePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();
  const [deletePost] = postAPI.useDeletePostMutation();


  const createFabric = (title: string) => ({
    title,
    id: Date.now(),
    body: 'createdBy'
  })

  const handleCreateBtnClick = async (): Promise<void> => {
    const title = prompt();

    if(!title) return;

    await createPost(createFabric(title));
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreateBtnClick}>Add new Post!</button>
        {isLoading && <h1>Идёт Загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts && posts.map(post =>
          <PostItem post={post} key={post.id} update={updatePost} remove={deletePost}/>  
        )}
      </div>
    </div>
  )
}