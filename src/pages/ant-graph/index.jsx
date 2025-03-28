import React, { useCallback, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from "react";
import { Graph, Markup } from "@antv/x6";
import { Button, Popover } from "antd";

const Label = (props) => {
  const onClick = () => {
    alert('clicked');
  }
  console.log('props', props);
  return (
    <button
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
        color: '#000',
        background: '#ffd591',
        border: '2px solid #ffa940',
        borderRadius: 4,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      onClick={onClick}
    >
      <Popover content={props.text || 'React Button'} title="Title">
        {
          props.text || 'React Button'
        }
      </Popover>
    </button>
  );
}


function AntGraph() {
  const edgeRef = useRef(null);
  const updateLabel = useCallback(() => {
    edgeRef.current.setLabels(
      {
        attrs: {
          label: {
            text: Math.random(),
          },
        },
        position: 0.25,
      });
  }, []);
  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById('container'),
      grid: true,
      background: {
        color: '#eac7b530', // 设置背景色
      },
      onEdgeLabelRendered: (args) => {
        const {selectors, label, edge,} = args;
        console.log('args', args, edge);
        const content = selectors.foContent;
        console.log('content', content);
        if (content) {
          ReactDOM.createRoot(content).render(<Label text={label.attrs.label.text}/>);
        }
      },
    })

    const edge = graph.addEdge({
      source: [170, 160],
      target: [550, 160],
      // 默认标签样式
      defaultLabel: {
        markup: Markup.getForeignObjectMarkup(),
        attrs: {
          fo: {
            width: 120,
            height: 30,
            x: 60,
            y: -15,
          },
        },
      },
      label: {
        attrs: {
          label: {
            text: '2222',
          },
        },
        position: 0.25,
      },
      attrs: {
        line: {
          stroke: '#ccc',
        },
      },
    });
    edgeRef.current = edge;
  }, []);

  return <div style={{
    display: "flex"
  }}>
    <div id="container" style={{
      width: 1000,
      height: 1000,
    }}></div>
    <Button onClick={updateLabel} style={{}}>Update Label</Button>
  </div>;
}

export default AntGraph;
