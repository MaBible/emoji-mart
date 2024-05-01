// @ts-nocheck
import React, { useEffect, useRef } from 'react'
import { Picker } from '@mabible/emoji-mart'

const style = {
  height: '100%',
}

export default function EmojiPicker(props) {
  const ref = useRef(null)
  const instance = useRef(null)

  if (instance.current) {
    instance.current.update(props)
  }

  useEffect(() => {
    instance.current = new Picker({ ...props, ref })

    return () => {
      instance.current = null
    }
  }, [])

  return React.createElement('div', { ref, style })
}
