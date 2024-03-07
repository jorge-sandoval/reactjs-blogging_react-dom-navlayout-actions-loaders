import PostForm from '../../../components/PostForm';

export default function NewPost() {
  return (
    <>
      <div className="container">
        <h1 className="page-title">Edit Post</h1>
        <PostForm mode="edit"></PostForm>
      </div>
    </>
  );
}
