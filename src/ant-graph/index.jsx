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
            fill: '#000',
            fontSize: 14,
            textAnchor: 'middle',
            textVerticalAnchor: 'middle',
            pointerEvents: 'none',
            style: {
              width: '200px', // 设置宽度
              overflow: 'hidden',
              textOverflow: 'ellipsis', // 溢出省略
              whiteSpace: 'nowrap',
            },
          },
          body: {
            ref: 'label',
            width: 140,
            fill: '#ffd591',
            stroke: '#ffa940',
            strokeWidth: 2,
            rx: 4,
            ry: 4,
            refWidth: '140%',
            refHeight: '140%',
            refX: '-20%',
            refY: '-20%',
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
