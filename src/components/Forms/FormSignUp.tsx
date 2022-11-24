import {
  Box,
  FormControl,
  HStack,
  Input,
  Select,
  Stack,
  WarningOutlineIcon,
} from "native-base";
import React from "react";
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

export default FormSignUp;
