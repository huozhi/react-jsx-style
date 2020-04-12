import React from 'react'
import ReactDOM from 'react-dom'
import {Keyframe, useKeyframe} from '../'

function AnimatedBlock() {
  return (
    <div
      style={{
        textAlign: 'center',
        width: 200,
        animation: 'scale_2 3000ms infinite',
        transformOrigin: 'center',
      }}
    >
      <h3>scale</h3>
      <style>
        <Keyframe identity={'scale_2'}>
          <Keyframe.Block selector={'from'} value={{WebkitTransform: 'scale(1)'}} />
          <Keyframe.Block selector={'to'} value={{WebkitTransform: 'scale(2)'}} />
        </Keyframe>
      </style>
    </div>
  )
}

function HookAnimationBlock() {
  return (
    <div>
      <div
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'orange',
          animationName: useKeyframe({
            from: {WebkitTransform: `rotate(0deg)`},
            to: {WebkitTransform: `rotate(135deg)`},
          }),
          animationDuration: '400ms',
          animationIterationCount: 'infinite',
        }}
      >
        Rotate
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <AnimatedBlock />
      <HookAnimationBlock />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

