import styled from "styled-components";
import ErrorIcon from "../assets/icon-error.svg";
import { useState } from "react";

const labelList = [
  { id: 1, type: "text", placeholder: "First Name" },
  { id: 2, type: "text", placeholder: "Last Name" },
  { id: 3, type: "email", placeholder: "Email Address" },
  { id: 4, type: "password", placeholder: "Password" },
];

const Inputs = () => {
  const [error, setError] = useState<boolean[]>([false, false, false, false]);

  const handleError = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputs = Array.from(document.getElementsByTagName(`input`));
    const empty = inputs.map((input) => input.value === "");

    if (!empty.includes(true)) {
      e.currentTarget.submit();
    }
    setError(empty);
  };

  return (
    <Form onSubmit={handleError}>
      {labelList.map((list) => {
        return (
          <div key={list.id}>
            <label>
              <Input
                about={
                  error[list.id - 1]
                    ? ".2rem solid #FF7979"
                    : ".1rem solid #DEDEDE"
                }
                type={list.type}
                placeholder={list.placeholder}
              />
              <Img
                src={ErrorIcon}
                about={error[list.id - 1] ? "inline-block" : "none"}
                alt="Error Icon"
              />
            </label>
            <ErrorP about={error[list.id - 1] ? "block" : "none"}>
              {list.placeholder} cannot be empty
            </ErrorP>
          </div>
        );
      })}
      <button>CLAIM YOUR FREE TRIAL</button>
      <p>
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and Services</span>
      </p>
    </Form>
  );
};

export default Inputs;

const Form = styled.form`
  background-color: white;
  border-radius: 1rem;
  margin: 2.4rem 0 6rem 0;
  padding: 2.4rem;
  input {
    outline: 0;
    font-size: 1.4rem;
    color: rgba(61, 59, 72, 0.75);
    font-weight: 600;
    line-height: 2.6rem;
    letter-spacing: 0.025rem;
    padding: 1.5rem 0 1.5rem 1.94rem;
    border-radius: 0.5rem;
    width: 100%;
  }
  label {
    position: relative;
  }
  button {
    background-color: #38cc8b;
    color: #fff;
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    border: 0;
    padding: 1.5rem 4.5rem 1.5rem 4.4rem;
    font-size: 1.5rem;
    line-height: 2.6rem;
    font-weight: 600;
    width: 100%;
    margin: 0 0 0.8rem 0;
    border-radius: 0.5rem;
  }
  p {
    color: #bab7d4;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 2.1rem;
  }
  div p {
    text-align: right;
    margin-bottom: 1.4rem;
    color: #ff7979;
  }
  span {
    color: #ff7979;
    font-weight: 700;
  }
  div:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  @media (min-width: 1110px) {
    margin: 2.4rem 0 0;
    padding: 4rem;
    input:focus {
      border: 0.1rem solid #5e54a4;
    }
    button:hover {
      opacity: 0.5;
      cursor: pointer;
    }
    div:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
const Img = styled.img`
  width: 2.4rem;
  position: absolute;
  top: -0.5rem;
  right: 1.5rem;
  display: ${(props) => props.about};
`;
const ErrorP = styled.p`
  display: ${(props) => props.about};
`;
const Input = styled.input`
  border: ${(props) => props.about};
`;
