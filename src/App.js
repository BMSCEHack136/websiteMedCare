// import "./App.css";
import { Provider } from "react";
import { GlobalData } from "./GlobalData";

import NavigationRoute from "./Navigation/NavigationRoute";

function App() {

      return (
      <div>
        <GlobalData>
          <NavigationRoute />
        </GlobalData>
      </div>
    );
  
}

export default App;
