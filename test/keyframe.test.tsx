import React from 'react'
import Keyframe from '../src/keyframe'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Keyframe identity='animation12'>
        <Keyframe.Block selector={'from'} value={{opacity: '0'}} />
        <Keyframe.Block selector={'50%'} value={{opacity: '0.5'}} />
        <Keyframe.Block selector={'to'} value={{opacity: '1'}} />
      </Keyframe>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
