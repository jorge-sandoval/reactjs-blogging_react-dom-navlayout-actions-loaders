import PostForm from '../../../components/PostForm';

export default function NewPost() {
  return (
    <>
      <div className="container">
        <h1 className="page-title">New Post</h1>
        <PostForm mode="create"></PostForm>
      </div>
    </>
  );
}
