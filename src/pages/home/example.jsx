import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function ExampleComponent() {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  console.log('width', width);

  // 使用 useEffect
  // useEffect(() => {
  //   if (divRef.current) {
  //     const {width} = divRef.current.getBoundingClientRect();
  //     setWidth(width);
  //   }
  // }, []);

  // 使用 useLayoutEffect
  useLayoutEffect(() => {
    if (divRef.current) {
      const { width } = divRef.current.getBoundingClientRect();
      setWidth(width);
    }
  }, []);

  return (
    <div>
      <div ref={divRef} style={{width: '50%'}}>
        内容
      </div>
      <p>宽度：{width}px</p>
    </div>
  );
}

export default ExampleComponent;
