import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import Header from './components/Header'
import SaveForm from './pages/user/SaveForm';
import Home from './pages/book/Home';
import LoginForm from './pages/user/LoginForm';
import ShowCalendar from './pages/user/ShowCalendar';
import Student from './pages/user/Student';
import Result from './pages/user/Result';
import JoinForm from './pages/user/JoinForm';
import UpdateForm from './pages/user/UpdateForm';
import Detail from './pages/book/Detail';

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/save" exact={true} component={SaveForm}/>
        <Route path="/book/:id" exact={true} component={Detail}/>
        <Route path="/login" exact={true} component={LoginForm}/>
        <Route path="/ShowCalendar" exact={true} component={ShowCalendar}/>
        <Route path="/Student" exact={true} component={Student}/>
        <Route path="/join" exact={true} component={JoinForm}/>
        <Route path="/Result" exact={true} component={Result}/>
        <Route path="/update/:id" exact={true} component={UpdateForm}/>
      </Container>    
    </div>
  );
}

export default App;
