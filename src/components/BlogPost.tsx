import { BlogPostType } from "../Pages/Home";

export default function BlogPost(props: BlogPostType) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}
