import styled from "styled-components";

export const ContainerWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  margin-top: 5rem;
  padding: 3rem;
  border-radius: 4px;

  h1 {
    font-size: 2rem;
    color: #293241;
    margin-bottom: 2rem;
  }

  h4 {
    color: blue;
    text-decoration: underline;
    margin-bottom: 20px;
    cursor: pointer;
    margin-top: unset;
  }
`;

export const SuccessMessage = styled.span`
  color: #1d3557;
  background: #8fffab;
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #293241;
`;

export const Input = styled.input`
  border: 2px solid rgba(#1d3557, 0.8);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  padding-left: 1rem;
  font-size: 1rem;
  color: #293241;
`;

export const Textarea = styled.textarea`
  border: 2px solid #1d3557;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  padding-left: 1rem;
  font-size: 1rem;
  color: #293241;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  .input-error {
    border-color: #ff0000;
  }

  .error {
    color: #ff0000;
    font-size: 1rem;
    margin-top: 0.3rem;
  }
`;

export const Button = styled.button`
  color: #fff;
  width: 100%;
  font-size: 1.4rem;
  background: #1d3557;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 0.4rem 1.2rem;
  margin-top: 0.5rem;

  &:hover {
    background: rgba(#1d3557, 0.8);
  }
`;
