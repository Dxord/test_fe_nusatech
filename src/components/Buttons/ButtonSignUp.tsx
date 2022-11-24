import { Text } from "native-base";
import React from "react";
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
export default ButtonSignUp;
