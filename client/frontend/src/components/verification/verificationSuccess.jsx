import { IoIosCheckmarkCircle } from "react-icons/io";
import PasswordResetSuccess from "../password reset success/PasswordResetSuccess";
import React from "react";
import { Box } from "@chakra-ui/react";

const VerificationSuccess = () => {
  return (
    <Box>
      <PasswordResetSuccess
        Icon={<IoIosCheckmarkCircle size={260} color="#00e075"/>}   
        message={"Your Email has been verified"}
        button={"Continue"}
        isSendVerification={false}    
      />
    </Box>
  );
};

export default VerificationSuccess;
