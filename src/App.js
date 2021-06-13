import React from "react";

import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header.js'
import ItemListContainer from "./components/ItemList/ItemListContainer";

class app extends React.Component {
  render() {
    return (
        <>
            <div>
              <Header/>
            </div>
            <div>
              <NavBar/>
            </div>
            <div>
              <ItemListContainer/>
            </div>
        </>
    );
  }
}

export default app;
