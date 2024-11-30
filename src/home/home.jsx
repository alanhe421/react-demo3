import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../actions";
import NumCounter from "../num-counter/index.";
import { ClickToComponent } from "click-to-react-component";
import { Button, DatePicker } from "antd";
import ExampleComponent from "./example";

function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [hasError, setHasError] = useState(false);
  const count = user.age;
  console.log(user);

  const createError = useCallback(() => {
    JSON.parse(undefined);
  }, []);

  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const {height} = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);

  useEffect(() => {
    if (hasError) {
      throw new Error('I crashed!');
    }
  }, [hasError]);


  console.log('tooltipHeight', tooltipHeight, ref.current?.getBoundingClientRect());

  return <><Link to={'/'}>home</Link>
    <Link to={'/ant-graph'}>
      Ant Graph
    </Link>
    <ClickToComponent editor={'cursor'}/>
    <NumCounter/>
    <DatePicker/>
    <ExampleComponent/>
    <div ref={ref}>
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
  </>;
}

export default Home;
