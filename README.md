# React JSX Style
> create dynamic injected styles with react component or hooks


## Installation

```sh
npm install -S react-jsx-style
```

## Usage

### Animation

```js
import {Keyframe} from 'react-jsx-style'

// Using react component - Keyframe, Keyframe.Block + <style>
// Scale animation
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


// Using hooks - useKeyframe
// Rotate animation
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

```

## License

[MIT](https://github.com/reduxjs/react-redux/blob/master/LICENSE.md)

