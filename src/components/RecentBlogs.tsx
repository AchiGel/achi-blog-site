import styled from "styled-components";

const RecentBlogPosts = styled.h2`
  color: #1a1a1a;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
`;

export default function RecentBlogs() {
  return (
    <section>
      <RecentBlogPosts>Recent blog posts</RecentBlogPosts>
    </section>
  );
}
