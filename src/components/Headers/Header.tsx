import { Box, Divider, HStack, Image, Select } from "native-base";
import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import moon from "../../assets/moon.png";
const Header = () => {
  const [language, setLanguage] = useState("EN");
  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      flex={1}
      space={4}
      p={4}
    >
      <Box flex={5}>
        <Image w={150} h={36} source={Logo} />
      </Box>

      <Box flex={1} alignItems="flex-end">
        <Select
          defaultValue={language}
          variant="unstyled"
          selectedValue={language}
          maxWidth="32"
          color="#fff"
          placeholder="EN/USD"
          placeholderTextColor="#fff"
          _text={{ color: "#fff" }}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Select.Item _text={{ color: "#fff" }} label="EN/USD" value="EN" />
          <Select.Item label="IN/IDN" value="ID" />
        </Select>
      </Box>
      <Divider w={0.1} h={8} bg="#B5B3BC" />
      <Box>
        <Image w={4} h={4} source={moon} />
      </Box>
    </HStack>
  );
};
export default Header;
