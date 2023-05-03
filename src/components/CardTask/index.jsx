import React from "react";
import {
  ButtonDelete,
  ButtonProcess,
  List,
  MenuOption,
  NameTask,
  Task,
  TaskTach,
} from "./styledComponent";
import Icondelete from "../IconDelete";

const listOptions = [
  {
    option: "initialized",
    bkg: "#b5b5b5",
  },
  {
    option: "in progress",
    bkg: "#34BC73",
  },
  {
    option: "finalized",
    bkg: "rgb(255 98 170)",
  },
];

export default function CardTask({
  task,
  handleCLick,
  handleChangeProcess,
  handleDeleteTask,
  index,
}) {
  return (
    <List key={task.id}>
      <Task>
        {task.process === "finalized" ? (
          <TaskTach>{task.name}</TaskTach>
        ) : (
          <NameTask>{task.name}</NameTask>
        )}
        {task.menuShow ? (
          <MenuOption>
            {listOptions.map(({ option, bkg, color }) => (
              <button
                onClick={() => handleChangeProcess(task.id, option, bkg)}
                style={{
                  background: bkg,
                  color: "#fff",
                }}
                key={option}
              >
                {option}
              </button>
            ))}
          </MenuOption>
        ) : null}
        <div style={{ display: "flex", alignItems: "center" }}>
          <ButtonProcess
            style={{ background: task.bkg }}
            onClick={() => handleCLick(task.id)}
          >
            {task.process}
          </ButtonProcess>
          <ButtonDelete onClick={() => handleDeleteTask(index)}>
            <Icondelete color="#A0A0A5" height="20px" width="24px" />
          </ButtonDelete>
        </div>
      </Task>
    </List>
  );
}
