import React from "react";
import {
  deleteTask,
  menuShow,
  updateProcess,
} from "../../redux/reducer/todoReducer";
import CardTask from "../CardTask";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ContentList = styled.ul`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  max-height: 400px;
  overflow-y: scroll;
  margin-top: 20px;
`;

const AlerNotTask = styled.h4`
  font-size: 17px;
  font-weight: 500;
`

export default function ContentListAll() {
  const task = useSelector((state) => state.todolist);
  const dispatch = useDispatch();

  const handleCLick = (id) => {
    dispatch(menuShow({ id }));
  };

  const handleChangeProcess = (id, process, bkg) => {
    dispatch(updateProcess({ id, process, bkg }));
    dispatch(menuShow({ id }));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask({ index }));
  };

  return (
    <ContentList
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {task.length > 0 ? (
        task.map((task, inx) => (
          <CardTask
            handleCLick={handleCLick}
            handleChangeProcess={handleChangeProcess}
            handleDeleteTask={handleDeleteTask}
            task={task}
            index={inx}
            key={task.id}
          />
        ))
      ) : (
        <AlerNotTask>You still don't have any tasks added!!!</AlerNotTask>
      )}
    </ContentList>
  );
}
