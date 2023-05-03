import styled from "styled-components";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  menuShow,
  updateProcess,
} from "./redux/reducer/todoReducer";
import FormTask from "./components/Form";

const AppContent = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

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
  font-size: 23px;
  max-width: 300px;
`;

const MenuOption = styled.div`
  position: absolute;
  background: #fff;
  top: -50px;
  right: 200px;
  border-radius: 10px;
  z-index: 5;
  padding: 20px 30px;
  box-shadow: 0px 10px 30px rgba(0 0 0 /15%);
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

const ContentList = styled.ul`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 70px 0;
  max-height: 400px;
  overflow-y: scroll;
  margin-top: 20px;
`;

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

const ButtonDelete = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 3px;
`


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
`

function App() {
  const task = useSelector((state) => state.todolist);
  const dispatch = useDispatch();

  const handleCLick = (id) => {
    dispatch(menuShow({ id }));
  };

  const handleChangeProcess = (id, process, bkg) => {
    dispatch(updateProcess({ id, process, bkg }));
    dispatch(menuShow({ id }));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask({ id }));
  };

  return (
    <AppContent>
      <FormTask />
      <ContentList
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {task.length > 0 ? (
          task.map((task) => (
            <List key={task.id}>
              <Task>
                <NameTask>{task.name}</NameTask>
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
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <ButtonProcess style={{background: task.bkg}} onClick={() => handleCLick(task.id)}>
                    {task.process}
                  </ButtonProcess>
                  <ButtonDelete onClick={() => handleDeleteTask(task.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#A0A0A5"
                      className="bi bi-trash-fill"
                      viewBox="0 0 15 15"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </ButtonDelete>
                </div>
              </Task>
            </List>
          ))
        ) : (
          <h4>Aun no tienes tareas agregadas!!!</h4>
        )}
      </ContentList>
    </AppContent>
  );
}

export default App;
