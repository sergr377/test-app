import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainPageContainer from './components/MainPage/MainPageContainer';
import EditPageContainer from './components/EditPage/EditPageContainer';
import LoginPageContainer from './components/LoginPage/LoginPageContainer';
import FeedbackPageContainer from './components/FeedbackPage/FeedbackPageContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarContainer />
        <Switch>
          <Route exact path='/mainPage'
            render={() => <MainPageContainer />} />
          <Route path='/editPage'
            render={() => <EditPageContainer />} />
          <Route path='/loginPage'
            render={() => <LoginPageContainer />} />
          <Route path='/feedbackPage'
            render={() => <FeedbackPageContainer />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App; 