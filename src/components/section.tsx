import styled from "styled-components";

const SectionPart = () => {
  return (
    <Section>
      <h2>
        Try it free 7 days <span>then $20/mo. thereafter</span>
      </h2>
    </Section>
  );
};

export default SectionPart;

const Section = styled.section`
  padding: 1.8rem 6.6rem 1.8rem 6.7rem;
  background-color: #5e54a4;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  h2 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.6rem;
    letter-spacing: 0.0268rem;
  }
  span {
    font-weight: 400;
  }
`;
