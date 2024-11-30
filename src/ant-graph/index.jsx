import { useEffect } from "react";
import { Graph } from "@antv/x6";

function AntGraph() {
  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById('container'), autoResize: true,
      background: {
        color: '#F2F7FA',
      }, grid: {
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
    });
    const node1 = graph.addNode({
      x: 100,
      y: 60,
      shape: 'rect',
      label: 'Rect1',
    });

    const node2 = graph.addNode({
      x: 300,
      y: 160,
      shape: 'rect',
      label: 'Rect2',
    });


    const edge1 = graph.addEdge({
      source: node1,
      target: node2,
      attrs: {
        line: {
          stroke: '#333',
          strokeWidth: 2,
          targetMarker: {
            name: 'classic',
            size: 7,
          },
        },
      },
    });

    edge1.setLabels([
      {
        attrs: {
          label: {
            text: `123`,
            fontSize: 12,
            background: {
              color: 'RGBA(0,0,0,0)',
            },
          },
        },
        position: 0.5,
      },
    ])
  }, []);

  return <div style={{
    width: '1000px', height: '1000px'
  }}>
    <div id="container"></div>
  </div>;
}

export default AntGraph;
