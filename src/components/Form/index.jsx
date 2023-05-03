import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTask } from "../../redux/reducer/todoReducer";

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
`;

const InputAdd = styled.input`
  padding: 10px 20px;
  font-size: 16px;
  margin-bottom: 10px;
  border: none;
  background: #f3f3f3;
  border-radius: 10px;
`;

const ButtonAdd = styled.button`
  padding: 10px 0;
  margin-bottom: 10px;
  border: none;
  background: #67a4ff;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
`;

export default function FormTask() {
  const dispatch = useDispatch((state) => state.todolist);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.children.name.value.trim() == "") return;
    const newTask = {
      name: e.target.children.name.value.trim(),
    };
    dispatch(addTask(newTask));
    e.target.children.name.value = "";
  };

  return (
    <FormElement onSubmit={handleSubmit}>
      <InputAdd type="text" name="name" />
      <ButtonAdd>Add Task</ButtonAdd>
    </FormElement>
  );
}
