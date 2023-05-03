import styled from "styled-components";

const List = styled.li`
  list-style: none;
  font-size: 17px;
  width: 100%;
`;

const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  border-radius: 20px;
  padding: 0 20px;
  margin-top: 10px;
  position: relative;
`;

const NameTask = styled.h3`
  margin-right: 20px;
  color: #4b3164;
  font-weight: 600;
  font-size: 20px;
  max-width: 260px;
`;

const MenuOption = styled.div`
  position: absolute;
  background: #fff;
  top: -50px;
  border-radius: 10px;
  z-index: 5;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 25px;
  button {
    padding: 5px 15px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    text-transform: capitalize;
    font-weight: 500;
    border-radius: 5px;
    margin: 3px 0;
  }
  display flex;
  flex-direction: column;
`;

const ButtonDelete = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 3px;
`;

const ButtonProcess = styled.button`
  background: none;
  border: none;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  padding: 7px 10px;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
`;

const TaskTach = styled.del`
  margin-right: 20px;
  color: #4b3164;
  font-weight: 600;
  font-size: 20px;
  max-width: 260px;
`;

export {
  ButtonDelete,
  ButtonProcess,
  List,
  MenuOption,
  NameTask,
  Task,
  TaskTach,
};
