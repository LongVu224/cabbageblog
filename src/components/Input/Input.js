import React from "react";
import styled from "styled-components";

export const Input = ({ type, placeholder, onChange }) => {
  return (
    <Container>
      <StyledInput
        onChange={onChange}
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autocomplete="off"
      />
      <Status />
    </Container>
  );
};

export const TextArea = ({ type, placeholder, onChange }) => {
    return (
      <Container>
        <StyledTextArea
          onChange={onChange}
          placeholder={placeholder && placeholder}
          type={type ? type : "text"}
          required
          autocomplete="off"
        />
        <StatusTextArea />
      </Container>
    );
  };

  const StyledTextArea = styled.textarea`
  outline: none;
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  min-height: 40px;
  height: auto;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

const StyledInput = styled.input`
  outline: none;
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
`;

const StatusTextArea = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  ${StyledTextArea}:focus + & {
    background: #ffa689;
  }
  ${StyledTextArea}:invalid + & {
    background: #fe2f75;
  }
  ${StyledTextArea}:valid + & {
    background: #70edb9;
  }
`;