import { Button, DatePicker } from "antd";
import { ClickToComponent } from "click-to-react-component";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button as TeaButton, DatePicker as TeaDatePicker } from "tea-component";
import { setUserInfo } from "../../actions";
import NumCounter from "../num-counter/index.";
import ExampleComponent from "./example";

function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [hasError, setHasError] = useState(false);
  const count = user.age;
  console.log(user);
  const [code, setCode] = useState(`
  const a = 12222;
  const b = 0;
`);

  const [num, setNum] = useState(0);

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


  const a = 1;
  const b = 0;

  return <><Link to={'/'}>home</Link>
    <TeaButton type={'primary'} onClick={() => {
      console.log('before', num);
      setNum(num + 1);
      // console.log('end', num);
      setTimeout(() => {
        console.log('end-time', num);
      },[]);
    }}>Tea Btn</TeaButton>
    <TeaButton type={'success'}>新增的Tea按钮</TeaButton>
    <TeaButton type={'warning'} onClick={() => console.log('warning clicked')}>警告按钮</TeaButton>
    <TeaButton type={'weak'} disabled>禁用按钮</TeaButton>
    <TeaDatePicker/>
    <Link to={'/ant-graph'}>
      Ant Graph
    </Link>
    <Link to={'/ant-graph-3d'}>
      Ant Graph 3D
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
      <div>
        111
      </div>
      <div>

        {
          Boolean(a && b) && <div>hello world</div>
        }
      </div>
      <Button onClick={()=>{
        console.log('更新代码？？？');
        const newCode = `
          const a = 1;
          const b = 0;
        `;
        setCode(newCode);
      }}>
        更新代码？？？
      </Button>
      <div dangerouslySetInnerHTML={{
        __html: hljs.highlight(code,
          { language: 'javascript' }
        ).value
      }}>
      </div>
    </div>
<div>
</div>

  </>;
}

export default Home;
