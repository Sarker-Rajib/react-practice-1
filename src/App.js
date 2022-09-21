import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}


function LoadComments() {
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
  }, [])


  return(
    <div>
      {
        comments.map(comment => <Comment email={comment.email}></Comment>)
      }
    </div>
  )
}


function Comment(props) {
  return (
    <div className="">
      <h2>{props.email}</h2>
    </div>
  );
}


export default App;