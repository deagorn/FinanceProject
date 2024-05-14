import { ColorRing } from 'react-loader-spinner'

const Loader = () => {
  return (
      <div>
          <ColorRing
  visible={true}
  height="480"
  width="480"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
    </div>
  )
}

export default Loader