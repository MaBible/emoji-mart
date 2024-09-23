import { Picker } from './'
import { useState } from 'preact/hooks'

const PickerParent = (props) => {
  const [displaySearch, setDisplaySearch] = useState(false)
  return (
    <>
      <button
        style={{ background: 'green' }}
        onClick={() => setDisplaySearch(!displaySearch)}
      >
        Show search
      </button>
      <Picker {...props} displaySearch={displaySearch} />
    </>
  )
}

export default PickerParent
