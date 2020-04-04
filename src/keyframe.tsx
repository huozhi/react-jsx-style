import React from 'react'
import {createPortal} from 'react-dom';

const KeyframeBlockFrom = ({value}) => `from ${value}`
const KeyframeBlockTo = ({value}) => `to ${value}`
const KeyframeBlockPercent = ({percent, value}) => `${percent}% ${value}`

type KeyframeProps = {
  identity: string;
  children?: any;
}

function Keyframe({identity, children}: KeyframeProps) {
  const globalStyle = (
    <style>
      {`@keyfame ${identity} {`}
        {children}
      {`}`}
    </style>
  )

  return (
    <>
      {createPortal(
        globalStyle,
        document.head
      )}
      {identity}
    </>
  )
}

Keyframe.From = KeyframeBlockFrom
Keyframe.To = KeyframeBlockTo
Keyframe.Percent = KeyframeBlockPercent

export default Keyframe
