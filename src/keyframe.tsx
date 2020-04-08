import React, {useMemo} from 'react'
import {createCssRules} from './react-css-transform';

const KeyframeBlock = ({selector, value: styles} : {selector: string, value: {}}) => {
  const css = useMemo(() => {
    return createCssRules(styles)
      .map(({name, value}) => `${name}:${value};`)
      .join('');
  }, [styles]);

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
      {`@keyframes ${identity} {`}
        {children}
      {`}`}
    </style>
  )
  return styleTag
}

Keyframe.Block = KeyframeBlock

export default Keyframe
