import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
//import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from 'react-router-dom';
//exact указывается в ссылке перед path и работает при точном совпадении URL.
/*<Route exact path='/dialogs' render={ () => <Dialogs Dialogs = {props.Dialogs} Messages = {props.Messages} />} />*/
        //<Sidebar  State = {props.State.SideBar} />+
function App(props) {
  // debugger;
  return (
    <BrowserRouter>
      <main className = "app-wrapper">
        <Header />
        <Navbar />
        <div className = "app-content-wrapper">
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/profile' render={ () => <Profile />} />
          <Route path='/users' render={ () => <UsersContainer />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;