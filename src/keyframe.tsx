import React, {useState, useEffect} from 'react'

function convertStyleObjectToCss(styles: {}): string {
  let cssRules = []
  for (const key in styles) {
    const value = styles[key]
    cssRules.push(`${key}:${value}`)
  }
  return cssRules.join(';')
}

const KeyframeBlock = ({selector, value} : {selector: string, value: {}}) => {
  const [css, setCss] = useState(convertStyleObjectToCss(value))
  useEffect(() => {
    const convertedCss = convertStyleObjectToCss(value)
    setCss(convertedCss)
  }, [value])
  return (
    <>{`${selector} { ${css} }`}</>
  )
}

type KeyframeProps = {
  identity: string;
  children?: any;
}

function Keyframe({identity, children} : KeyframeProps) {
  const styleTag = (
    <style>
      {`@keyfame ${identity} {`}
        {children}
      {`}`}
    </style>
  )
  return styleTag
}

Keyframe.Block = KeyframeBlock

export default Keyframe
