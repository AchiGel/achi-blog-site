import { useEffect, useState } from "react";
import BlogPost from "../components/BlogPost";
import styled from "styled-components";
import Baner from "../components/Baner";
import RecentBlogs from "../components/RecentBlogs";

export interface BlogPostType {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, []);

  const MainWrapper = styled.main`
    padding-inline: 5rem;
  `;

  const BlogWrapper = styled.div`
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, 1fr);
  `;

  return (
    <MainWrapper>
      <Baner />
      <RecentBlogs />
      <BlogWrapper>
        {blogs.map((el: BlogPostType) => (
          <BlogPost key={el.id} title={el.title} body={el.body} id={el.id} />
        ))}
      </BlogWrapper>
    </MainWrapper>
  );
}
