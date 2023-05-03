import styled from "styled-components";
import FormTask from "./components/Form";
import ContentListAll from "./components/ContentList";
import "./App.css";

const AppContent = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1 `
  color: rgb(75, 49, 100);
  font-size: 30px;
  margin-bottom: 50px;
`

function App() {
  return (
    <AppContent>
      <Title>To Do App</Title>
      <FormTask />
      <ContentListAll />
    </AppContent>
  );
}

export default App;
