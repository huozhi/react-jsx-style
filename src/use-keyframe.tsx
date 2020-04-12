import React, {useRef, useEffect} from 'react'
import {render} from 'react-dom'
import Keyframe from './keyframe'

function usePortal(portal: any, root: HTMLElement): void {
  const styleTagRef = useRef(document.createElement('style'))
  const styleTag = styleTagRef.current
  const portalRef = useRef(null)
  useEffect(() => {
    portalRef.current = render(portal, styleTag)
  }, [portal])

  useEffect(() => {
    if (root) {
      root.appendChild(styleTag);
    }
    return () => {
      if (root) {
        root.removeChild(styleTag);
      }
    }
  }, [root])
}

/*
  {
    from: {...}
    "50": {...}
    to: {...}
  },
*/
function useKeyframe(
  keyframeBlocks: {} = {},
  identity = `ReactStyleKeyframe${Math.round(Math.random() * 1000)}`
) {
  const blockKeys =  Object.keys(keyframeBlocks)
  const keyframeTag = (
    <Keyframe identity={identity}>
      {blockKeys.map((keyframeSelector, index) => {
        const value = keyframeBlocks[keyframeSelector]
        return <Keyframe.Block key={index} selector={keyframeSelector} value={value} />
      })}
    </Keyframe>
  )

  usePortal(keyframeTag, document.head)

  return identity
}

export default useKeyframe
