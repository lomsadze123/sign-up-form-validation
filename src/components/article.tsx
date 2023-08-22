import styled from "styled-components";

const Article = () => {
  return (
    <ArticleTag>
      <h1>
        Learn to code by <br /> watching others
      </h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </ArticleTag>
  );
};

export default Article;

const ArticleTag = styled.article`
  color: #ffffff;
  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: -0.0292rem;
    margin-top: 8rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.6rem;
    margin: 1.6rem 0 6.4rem 0;
    max-width: 52.5rem;
  }

  @media (min-width: 1110px) {
    text-align: left;

    h1 {
      margin: 0;
      font-size: 5rem;
      line-height: 5.5rem;
      letter-spacing: -0.0521rem;
    }
    p {
      margin: 2rem 0 0;
      letter-spacing: 0.04rem;
    }
  }
`;
