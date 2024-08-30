import './App.css';
import Functionalcomp from './components/Teaching Demo/Functionalcomp';
import Classcomp from './components/Teaching Demo/Classcomp';
import Propsfunc from './components/Teaching Demo/Propsfunc';
import Propsclass from './components/Teaching Demo/Propsclass';
import Usestate from './components/Teaching Demo/Usestate';

function App() {
  return (
    <div className="App">
      <Functionalcomp />
      <Classcomp />
      <Propsfunc name="Rovic" lastname="Balingbing">
        <h1>This is a sample of props in functional components</h1> {/*This is a child*/}
      </Propsfunc>
      <Propsclass message="This is my message" />
      <Usestate />
    </div>
  );
}

export default App;
