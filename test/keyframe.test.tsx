import React from 'react'
import Keyframe from '../src/keyframe'
import renderer from 'react-test-renderer'

it('renders normal key, numeric value css rule correctly', () => {
  const tree = renderer
    .create(
      <Keyframe identity='animation12'>
        <Keyframe.Block selector={'from'} value={{opacity: 0}} />
        <Keyframe.Block selector={'50%'} value={{opacity: 0.5}} />
        <Keyframe.Block selector={'to'} value={{opacity: 1}} />
      </Keyframe>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('renders prefixed key, string value css rule correctly', () => {
  const tree = renderer
    .create(
      <Keyframe identity='animation12'>
        <Keyframe.Block selector={'from'} value={{WebkitTransform: 'scale(1)'}} />
        <Keyframe.Block selector={'to'} value={{WebkitTransform: 'scale(2)'}} />
      </Keyframe>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
