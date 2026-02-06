import UseStateDemo from "./components/UseStateDemo";
import UseEffectDemo from "./components/UseEffectDemo";
import UseReducerDemo from "./components/UseReducerDemo";
import UseRefDemo from "./components/UseRefDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import UseCallbackDemo from "./components/UseCallbackDemo";
import FetchDemo from "./components/FetchDemo";
import AxiosCRUD from "./components/AxiosCRUD";

function App() {
  return (
    <>
      <h1>React Hooks & API Demo</h1>

      <UseStateDemo />
      <UseEffectDemo />
      <UseReducerDemo />
      <UseRefDemo />
      <UseMemoDemo />
      <UseCallbackDemo />
      <FetchDemo />
      <AxiosCRUD />
    </>
  );
}

export default App;
