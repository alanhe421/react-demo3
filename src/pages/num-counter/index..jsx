import { useCallback, useLayoutEffect, useRef } from "react";
import { Button } from "antd";

function NumCounter() {
  const contentRef = useRef(null);
  const appendClick = useCallback(() => {
    contentRef.current.innerHTML += '<div>1</div>';
  }, []);

  useLayoutEffect(() => {
    console.log('num counter', 'useLayoutEffect');
  }, []);

  return <div>
    <Button onClick={appendClick}>
      append content
    </Button>
    <div ref={contentRef}>
      21221
    </div>
  </div>
}

export default NumCounter;
