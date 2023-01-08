import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import button from './Button';
function App() {
  const x = 10 
  return (
    <div className="App"
    style={{backgroundColor:'brown'}}>
    <h1 style = {{backgroundColor:'red',fontFamily:'sans-serif'}}>Hello From React</h1> 
    <Header title={'GM'}/>
    </div>
  );
}

export default App;
