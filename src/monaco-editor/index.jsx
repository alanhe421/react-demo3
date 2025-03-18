import React, { useCallback, useRef } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';
const sampleValue=[
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "tokenId",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "set",
    "describe": "设置地址",
    "outputs": [
      {
        "name": "check",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "get",
    "describe": "获取地址",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "eeeee",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "describe": "转账事件，从from地址转到to地址",
    "type": "event"
  }
]

monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
  validate: true,
  schemas: [
    {
      uri: "http://myschema/abi-schema.json",
      fileMatch: ["*"],
      schema: {
        type: "array",
        items: {
          type: "object",
          required: ["type"],
          properties: {
            anonymous: { 
              type: "boolean",
              description: "是否为匿名事件，false表示该事件是链上可识别的"
            },
            inputs: {
              type: "array",
              description: "输入参数，要求参数顺序要和合约中参数顺序一致",
              items: {
                type: "object",
                properties: {
                  indexed: { 
                    type: "boolean",
                    description: "表示该参数是索引参数，可以被用于过滤事件"
                  },
                  internalType: { 
                    type: "string",
                    description: "内部类型，表示数据类型，如uint256、address等"
                  },
                  name: { 
                    type: "string",
                    description: "参数名称"
                  },
                  type: { 
                    type: "string",
                    description: "参数类型，如uint256、address等"
                  }
                }
              }
            },
            name: { 
              type: "string",
              description: "函数或事件名称"
            },
            describe: { 
              type: "string",
              description: "函数或事件的描述"
            },
            outputs: {
              type: "array",
              description: "输出参数，要求参数顺序要和合约中参数顺序一致",
              items: {
                type: "object",
                properties: {
                  internalType: { 
                    type: "string",
                    description: "内部类型，表示数据类型"
                  },
                  name: { 
                    type: "string",
                    description: "参数名称"
                  },
                  type: { 
                    type: "string",
                    description: "参数类型"
                  }
                }
              }
            },
            stateMutability: { 
              type: "string", 
              enum: ["view", "pure", "nonpayable", "payable"],
              description: "函数的状态可变性：view(只读)、nonpayable(可修改状态但不接收以太币)、pure(不读取或修改状态)、payable(可接收以太币)"
            },
            type: { 
              type: "string", 
              enum: ["function", "event", "constructor", "fallback", "receive"],
              description: "类型：function(函数)、event(事件)、constructor(构造函数)、fallback(回退函数)、receive(接收函数)"
            }
          }
        }
      }
    }
  ]
});
function AntGraph() {
  return <div style={{
    display: "flex"
  }}>
    <MonacoEditor
      width="800px"
      height="700px"
      language="json"
      theme="vs-dark"
      value={JSON.stringify(sampleValue, null, 2)}
      options={{
        formatOnPaste: true,
        formatOnType: true,
        autoIndent: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        suggestOnTriggerCharacters: true,
        quickSuggestions: true,
        // 启用JSON验证和自动完成
        validate: true,
        // 启用自动完成
        quickSuggestions: {
          strings: true,
          other: true,
          comments: true
        },
        // 启用参数提示
        parameterHints: {
          enabled: true
        },
        // 启用代码片段
        snippets: "inline",
        // 启用智能感知
        suggest: {
          showWords: true,
          showSnippets: true,
          showProperties: true,
          showMethods: true,
          showFunctions: true,
          showVariables: true,
          showClasses: true,
          showInterfaces: true,
          showStructs: true,
          showEvents: true,
          showOperators: true,
          showUnits: true,
          showValues: true,
          showConstants: true,
          showEnums: true,
          showEnumMembers: true,
          showKeywords: true,
          showTypeParameters: true,
          showModules: true,
          showFiles: true,
          showReferences: true,
          showFolders: true,
          showColors: true,
          showIcons: true
        },
      }}
    />
  </div>;
}

export default AntGraph;
