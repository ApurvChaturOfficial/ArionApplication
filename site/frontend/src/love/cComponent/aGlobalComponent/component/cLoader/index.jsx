import React from 'react'
import brand from '@/love/dFunction/gBrand';


const Loader = ({ text }) => {
  return (
    <>          
      {text || "Loading..."}
    </>
  )
}

export default Loader