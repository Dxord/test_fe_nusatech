import { NativeBaseProvider } from "native-base";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUp } from "./features";

function App() {
  return (
    <NativeBaseProvider>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </NativeBaseProvider>
  );
}

export default App;
