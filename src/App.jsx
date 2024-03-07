import Background from "./components/Background";
import Foreground from "./components/Foreground";
import { TodoContextProvider } from "../Store/Store";
function App() {
  return (
    <TodoContextProvider>
      <div className="relative w-full h-screen bg-zinc-800">
        <Background />
        <Foreground />
      </div>
    </TodoContextProvider>
  );
}

export default App;
