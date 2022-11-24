import { Checkbox, HStack, Text } from "native-base";
import React from "react";
const UserAgree = () => {
  return (
    <HStack space={4} maxWidth="md">
      <Checkbox value="test" defaultIsChecked />
      <Text textAlign="left" fontSize="md" color="#B5B3BC">
        By signing up I agree that I’m 18 years of age or older, to the User
        Agreements, Privacy Policy, Cookie Policy, E-Sign Consent.
      </Text>
    </HStack>
  );
};

export default UserAgree;
