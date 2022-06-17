// import "./App.css";

import NavigationRoute from "./Navigation/NavigationRoute";
// import Login from "./pages/Login/Login";
// import "./pages/Login/Login.css";
function App() {
  sessionStorage.setItem("login", 1);
  sessionStorage.setItem("count", 1);
  if (sessionStorage.getItem("login") == 1) {
    return (
      <div>
        <NavigationRoute style={{ backgroundColor: "#000080" }} />;
      </div>
    );
  }
}

export default App;
