import { extendTheme } from "@chakra-ui/react";

/**
 * アプリケーション全体のスタイルを定義
 */
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});

export default theme;
