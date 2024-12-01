import React, { useCallback, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from "react";
import { Graph, Markup } from "@antv/x6";
import { Button, Popover } from "antd";
import { register } from '@antv/x6-react-shape'
import iconUrl from './../svg/surface-computer-25d.svg';

class CustomNode extends React.Component {
  shouldComponentUpdate() {
    const {node} = this.props;
    if (node) {
      if (node.hasChanged('data')) {
        return true;
      }
    }
    return false;
  }

  render() {
    const {node} = this.props;
    const data = node?.getData();
    return (
      <div className={`node`}>
        <img src={iconUrl} alt={''} width={80}/>
        <div className="label">
          {data.label}
        </div>
      </div>
    );
  }
}

register({
  shape: 'custom-node',
  width: 100,
  height: 100,
  component: CustomNode,
  ports: {
    groups: {
      top: {
        position: 'top',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#C2C8D5',
            strokeWidth: 1,
            fill: '#fff',
          },
        },
      },
      bottom: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#C2C8D5',
            strokeWidth: 1,
            fill: '#fff',
          },
        },
      },
    },
  },
});

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
        color: '#ffffff', // 设置背景色
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
    });
    const node1 = graph.addNode({
      x: 100,
      y: 160,
      shape: 'custom-node',
      data: {
        label: 'React Node',
      }
    });

    const node2 = graph.addNode({
      x: 400,
      y: 360,
      shape: 'custom-node',
      data: {
        label: 'React Node2',
      }
    });

    graph.addEdge({
      source: node1,
      target: node2,
      attrs: {
        line: {
          stroke: '#ff0000',
          strokeWidth: 2,
        },
      },
      labels: [
        {
          attrs: {
            label: {
              text: 'React Edge',
            },
          },
          position: 0.5,
        },
      ],
    })
    return () => {
      graph.dispose();
    }
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