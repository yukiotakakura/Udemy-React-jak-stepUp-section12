import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// 外部コンポーネント と 内部コンポーネントの境界
import theme from "./theme/theme"; // グローバルなsytle（アプリ全体のテーマ）を呼び出す
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
