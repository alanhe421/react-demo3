import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../actions";
import NumCounter from "../num-counter/index.";
import { ClickToComponent } from "click-to-react-component";
import { Button, DatePicker } from "antd";
import ErrorBoundary from "../error/react-err";

function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [hasError, setHasError] = useState(false);
  const count = user.age;
  console.log(user);
  if (hasError) {
    return hasError.username.aaa;
  }
  return <ErrorBoundary><Link to={'/'}>home</Link>
    <ClickToComponent editor={'cursor'}/>
    <NumCounter/>
    <DatePicker/>
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
      <Button onClick={() => {
        setHasError(true);
      }}>
        throw error
      </Button>
    </div>
  </ErrorBoundary>;
}

export default Home;
