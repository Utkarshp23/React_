import './App.css';
import Counter from './components/Counter';
import DispImg from './components/DispImg';
import Employee from './components/Employee';
// import ClassComp from './components/ClassComp';
// import Fact from './components/Fact';
// import FunComp from './components/FunComp';
import Greet from './components/Greet';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
// import Header from './components/layout/Header';
// import NamePrinter from './components/NamePrinter';

function App() {
  // var number = 6
  // var arr = ["Utkarsh", "Harshad", "Vishal", "Shubham"]
  // var emp = [{ name: 'Utkarsh', empid: 123, salary: 100000 }, { name: 'Harshad', empid: 124, salary: 20000 }, { name: 'Vishal', empid: 125, salary: 200000 }]
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Fact num={number} /> */}
      {/* <NamePrinter emp={emp} /> */}
      {/* <Greet /> */}
      {/* <Counter /> */}
      {/* <DispImg /> */}
      {/* <Login /> */}
      <SignUp />
      {/* <Employee /> */}
    </div>
  );
}

export default App;
