import React from 'react';
import './App.css';
import s from './App.module.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainPageContainer from './components/MainPage/MainPageContainer';
import EditPageContainer from './components/EditPage/EditPageContainer';
import LoginPageContainer from './components/LoginPage/LoginPageContainer';
import FeedbackPage from './components/FeedbackPage/FeedbackPageContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';


const App = () => {
  return (
    <div className={s.appBlock}>
      <BrowserRouter>
        <NavbarContainer />
        <Switch>
        <Route exact path='/'
            render={() => <MainPageContainer />} />
          <Route path='/mainPage'
            render={() => <MainPageContainer />} />
          <Route path='/editPage'
            render={() => <EditPageContainer />} />
          <Route path='/loginPage'
            render={() => <LoginPageContainer />} />
          <Route path='/feedbackPage'
            render={() => <FeedbackPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App; 