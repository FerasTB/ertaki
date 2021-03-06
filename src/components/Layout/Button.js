import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainWhite);
  background: var(--lightBlue);
  color: var(--mainWhite);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainWhite);
    color: var(--lightBlue);
  }
  &:focus {
    outline: none;
  }
`;
export const ButtonMobileContainer = styled.button`
  font-size: 1.1rem;
  background: transparent;
  border: 0.05rem solid var(--mainWhite);
  background: var(--lightBlue);
  color: var(--mainWhite);
  border-radius: 0.7rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  margin-left: auto;
  &:hover {
    background: var(--mainWhite);
    color: var(--lightBlue);
  }
  &:focus {
    outline: none;
  }
`;