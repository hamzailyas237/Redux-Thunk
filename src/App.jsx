
import './App.css';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { addOne, subtractOne } from './store/actions/CounterAction';

function App() {

  // useDispatch to call action
  // useSelector to access global states / all reducers

  const dispatch = useDispatch()

  const selector1 = useSelector((state) => {
    return state.AddCounterReducer;
  })

  const selector2 = useSelector((state) => {
    return state.SubtractCounterReducer;
  })

  console.log(selector1, selector2);
  const increment = () => {
    dispatch(addOne())
  }

  const decrement = () => {
    dispatch(subtractOne())
  }
  return (
    <div className="App">

        <button onClick={increment} className="btn btn-primary">INCREMENT</button>
        <big> {selector1.globalCount} </big>
        <big> {selector2.globalCount} </big>
        <button onClick={decrement} className="btn btn-danger">DECREMENT</button>
    </div>
  );
}

export default App;
