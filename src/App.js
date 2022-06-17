// import "./App.css";
import { Provider } from "react";
import { GlobalData } from "../public/commmon/GlobalData";

import NavigationRoute from "./Navigation/NavigationRoute";
// import Login from "./pages/Login/Login";
// import "./pages/Login/Login.css";
function App() {
  sessionStorage.setItem("login", 1);
  sessionStorage.setItem("count", 1);
  if (sessionStorage.getItem("login") == 1) {
    return (
      <div>
<<<<<<< HEAD
        <NavigationRoute style={{ backgroundColor: "#000080" }} />;
=======
        <GlobalData>
          <NavigationRoute />;
        </GlobalData>
>>>>>>> 55bcb193adf421aa87a8735027ba6ab241710548
      </div>
    );
  }
}

export default App;
