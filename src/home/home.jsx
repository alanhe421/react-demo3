import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../actions";

function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const count = user.age;
  console.log(user);
  return <><Link to={'/'}>home</Link>

    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(setUserInfo({
            name: '123', age: Math.random(),
          }))}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(setUserInfo({
            name: '1221ddd3', age: Math.random(),
          }))}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  </>;
}

export default Home;
