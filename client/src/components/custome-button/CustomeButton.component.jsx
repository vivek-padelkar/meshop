import { CustomeButtonContainer } from './CustomeButton.style.js'

import React from 'react'

const CustomeButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <CustomeButtonContainer isGoogleSignIn={isGoogleSignIn} {...otherProps}>
      {children}
    </CustomeButtonContainer>
  )
}

export default CustomeButton
