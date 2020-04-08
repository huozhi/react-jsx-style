# React Style
> create dynamic injected styles with react component or hooks


## Usage

```js
import {Keyframe} from ''

function AnimatedBlock() {
  return (
     <div
      style={{
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
```

## License

MIT

