import React from "react";
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import Home from './components/ItemList/Home';

function App() {
    return (
        <Router>
            <div>
              <Header/>
            </div>
            <div>
              <NavBar/>
            </div>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/detalles/:id' component={ItemDetailContainer} />
            </Switch>
        </Router>
    );
}

export default App;
