import './index.css';
import House from './House';
import Home from'./Home';
import Navbar from './Navbar';


function App() {
  // let key = 'People of space'
  // let num = 450
  // let ary = ['nnaa' ,'nana' ,'nomkirm' ,'rimc']

  return (
    <div className='App'>
      <Navbar></Navbar>
      <main className="content">
      <Home></Home> 
      <House></House>
      </main>
      
    </div>
  );
}

export default App;
