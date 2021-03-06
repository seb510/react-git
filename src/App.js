import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
                {/*<Route path='/settings' component={Settings}/> -старий вигляд*/}
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
