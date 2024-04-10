import React from 'react'
import PasswordResetSuccess from "../password reset success/PasswordResetSuccess";
import { Box } from "@chakra-ui/react";
import { IoIosCheckmarkCircle } from 'react-icons/io';
const VerificationError = () => {
  return (
    <Box>
    <PasswordResetSuccess
      Icon={<IoIosCheckmarkCircle size={260} color="#F52538 "/>}  
      message={"Your Email has not verified"}     
      button={"Send Email Again"}  
      isSendVerification={true}
    />
  </Box>    
  )
}

export default VerificationError
