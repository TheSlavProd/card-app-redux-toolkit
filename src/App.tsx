import "./App.css";
import { AppContainer } from "./app.styled";
import { Aside } from "./components/aside";
import { Main } from "./pages/main";

function App() {
  return (
    <AppContainer className="App">
      <Main />
      <Aside />
    </AppContainer>
  );
}

export default App;
