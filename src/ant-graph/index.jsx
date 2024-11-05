import { useEffect } from "react";
import { Graph } from "@antv/x6";

function AntGraph() {

  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById('container'), autoResize: true,
      background: {
        color: '#F2F7FA',
      },grid: {
        visible: true,
        type: 'doubleMesh',
        args: [
          {
            color: '#eee', // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
          {
            color: '#ddd', // 次网格线颜色
            thickness: 1, // 次网格线宽度
            factor: 4, // 主次网格线间隔
          },
        ],
      },
    })
  }, []);

  return <div style={{
    width: '1000px', height: '1000px'
  }}>
    <div id="container"></div>
  </div>;
}

export default AntGraph;
