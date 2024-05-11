import { PostContainer } from "./post-container";
import { PostContainer2 } from "./post-container2";

export function App() {
  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch]);

  return (
    <div className="app">
      {/* {isLoading && <h1>Идёт загрузка</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}; */}
      <PostContainer />
      <PostContainer2/>
    </div>
  )
}