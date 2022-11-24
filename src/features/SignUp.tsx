import { Box, Divider, HStack, Pressable, Text, Image } from "native-base";
import rocket from "../assets/rocket.png";
import { UserAgree } from "../components/AgreementsBox";
import { ButtonSignUp } from "../components/Buttons";
import { FormSignUp } from "../components/Forms";
import { Header } from "../components/Headers";

const SignUp = () => {
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

export { default as SignUp } from "./SignUp";

export default SignUp;
