import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  HStack,
  Image,
  Input,
  NativeBaseProvider,
  Pressable,
  Select,
  Stack,
  Text,
  WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./assets/Logo.png";
import moon from "./assets/moon.png";
import rocket from "./assets/rocket.png";
const IndexView = () => {
  const [language, setLanguage] = useState("EN");
  return (
    <div className="App">
      <Box
        flex={1}
        alignSelf="center" // bg="primary.500"
        bg="#1E1E1E"
      >
        <Header />
        <Box alignSelf="flex-end" paddingRight={20}>
          <HStack>
            <Text color="#FCFCFD">Already Have an account? </Text>
            <Pressable>
              <Text color="#02C3BD">Login</Text>
            </Pressable>
          </HStack>
        </Box>

        <HStack space={4} p={4}>
          <Box flex={2}>
            <Image w="2xl" height="2xl" source={rocket} />
          </Box>
          <Box alignItems="flex-start" p={12} flex={4}>
            <Text fontSize="3xl" fontWeight="700" color="#F2F0FF">
              Sign Up
            </Text>
            <Text fontSize="xs" color="#777E91">
              Use Your OpenID to Sign up
            </Text>

            <HStack space={4} py={8}>
              <Pressable>
                <Text fontSize="xs" color="#02C3BD">
                  Email
                </Text>
              </Pressable>
              <Divider w={0.1} h={4} bg="#B5B3BC" />
              <Pressable>
                <Text fontSize="xs" color="#B5B3BC">
                  Phone Number
                </Text>
              </Pressable>
            </HStack>
            <FormSignUp />
            <UserAgree />
            <ButtonSignUp />
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

const Header = () => {
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

const FormSignUp = () => {
  return (
    <Box minWidth="md">
      <FormControl mb="4">
        <FormControl.Label _text={{ color: "#F2F0FF" }}>
          Email
        </FormControl.Label>
        <Input
          size="md"
          _text={{ color: "#F2F0FF" }}
          color="#F2F0FF"
          placeholder="nusatech123@gmail.com"
          type="text"
        />
      </FormControl>
      <FormControl mb="4">
        <Stack>
          <FormControl.Label _text={{ color: "#F2F0FF" }}>
            Password
          </FormControl.Label>
          <Input
            size="md"
            _text={{ color: "#F2F0FF" }}
            color="#F2F0FF"
            type="password"
            placeholder="*************"
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
      <FormControl mb="4">
        <Stack>
          <FormControl.Label _text={{ color: "#F2F0FF" }}>
            Confirm Password
          </FormControl.Label>
          <Input
            size="md"
            _text={{ color: "#F2F0FF" }}
            color="#F2F0FF"
            type="password"
            placeholder="*************"
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <FormControl mb="4">
        <Stack>
          <HStack>
            <FormControl.Label _text={{ color: "#F2F0FF" }}>
              Referral ID (Optional)
            </FormControl.Label>
            <Select
              variant="unstyled"
              maxWidth="16"
              defaultValue="ID"
              placeholderTextColor="#fff"
              _text={{ color: "#fff" }}
            >
              <Select.Item _text={{ color: "#fff" }} label="ID" value="ID" />
            </Select>
          </HStack>

          <Input
            size="md"
            _text={{ color: "#F2F0FF" }}
            color="#F2F0FF"
            type="text"
            placeholder="Referral ID (Optional)"
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>
  );
};

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

const ButtonSignUp = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 16px",
        gap: "12px",

        width: "351px",
        height: "39px",

        background: "linear-gradient(135deg, #02C3BD 0%, #4062BB 100%)",
        borderRadius: "4px",
      }}
    >
      <Text textAlign="left" fontSize="xl" color="#F2F0FF">
        Sign Up
      </Text>
    </div>
  );
};

function App() {
  return (
    <NativeBaseProvider>
      <Routes>
        <Route path="/" element={<IndexView />} />
      </Routes>
    </NativeBaseProvider>
  );
}

export default App;
