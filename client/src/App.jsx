import { RoutesApp } from "./routes/RoutesApp";

import "./App.css";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <>
      <AppProvider>
        <RoutesApp />
      </AppProvider>
    </>
  );
}

export default App;
