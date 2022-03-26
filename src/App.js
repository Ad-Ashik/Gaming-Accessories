import './App.css';
import Header from './components/Header/Header';
import Products from './components/Header/Products/Products';

function App() {
  return (
    <div>
      <Header></Header>
      <Products></Products>
      <Question></Question>
    </div>
  );
}

function Question() {
  return (
    <div style={{ margin: "90px" }}>
      1. how to work react?
      <p>React is javascript library. one web-site make in many components easy to work. React also have access to incedible feature or component lifecycle. React work fack dom. and finally recat work fast and flexible.
      </p>

      2.how useState work react?
      <p>React useState Hooks allow use all of the incredible. useState Hooks are all array. useState ues to no class name. useState allows state variables in functional components. useState function a built in hook can be imported trom package. </p>
    </div>
  )
}

export default App;
