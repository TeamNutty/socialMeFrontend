import './App.css';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Post from './components/Post/Post';
import ProfileSetting from './components/profileSetting/ProfileSetting';
import MyProfile from './pages/MyProfile';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Input from './components/profileSetting/Input';
function App() {
  return (
    <div className="bg-secondary">
      <Header />
      <Content>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/profile-setting" component={ProfileSetting} />
          <Route exact path="/profile-setting-input" component={Input} />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
