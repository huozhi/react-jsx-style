import React, {useRef, useEffect} from 'react'
import {render} from 'react-dom'
import Keyframe from './keyframe'

function usePortal(portal: any, root: HTMLElement): void {
  const portalRef = useRef(render(portal, root))
  useEffect(() => {
    root.appendChild(portalRef.current)
    return () => {
      root.removeChild(portalRef.current)
    }
  }, [])
}

/*
  {
    from: {...}
    "50": {...}
    to: {...}
  },
*/
function useKeyframe(keyframeBlocks: [] = []) {
  const identity = `ReactStyleKeyframe${Math.random() * 1000}`
  const blockKeys =  Object.keys(keyframeBlocks)
  const keyframeTag = (
    <Keyframe identity={identity}>
      {blockKeys.map((keyframeSelector, index) => {
        const value = keyframeBlocks[keyframeSelector]
        if (keyframeSelector === 'from') {
          return <Keyframe.From key={index} value={value} />
        } else if (keyframeSelector === 'to') {
          return <Keyframe.To key={index} value={value} />
        } else if (typeof keyframeSelector === 'string') {
          return <Keyframe.Percent key={index} percent={parseInt(keyframeSelector)} value={value} />
        }
      })}
    </Keyframe>
  )

  usePortal(keyframeTag, document.head)

  return identity
}

export default useKeyframe
