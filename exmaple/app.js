import React from 'react'
import ReactDOM from 'react-dom'
import {Keyframe} from '../src'

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
      <h3>see me scale</h3>
      <Keyframe identity={'scale_2'}>
        <Keyframe.Block selector={'from'} value={{WebkitTransform: 'scale(1)'}} />
        <Keyframe.Block selector={'to'} value={{WebkitTransform: 'scale(2)'}} />
      </Keyframe>
    </div>
  )
}

function App() {
  return (
    <AnimatedBlock />
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

