import styled from "styled-components";

const BannerTitle = styled.h1`
  color: #1a1a1a;
  font-size: 160.8px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-top: 1px solid #9e9e9e;
  border-bottom: 1px solid #9e9e9e;
  text-align: center;
  margin-bottom: 2rem;
`;

export default function Baner() {
  return (
    <div>
      <BannerTitle>THE BLOG</BannerTitle>
    </div>
  );
}
