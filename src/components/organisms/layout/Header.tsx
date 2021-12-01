/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, VFC } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useHistory } from "react-router-dom";

/**
 * organisms粒度なヘッダーコンポーネントを定義
 */
export const Header: VFC = memo(() => {
  // chakuraUIでモーダルやメニューのオープンやクローズの便利で扱えるような「useDisclosure()」hooksがある
  const { isOpen, onOpen, onClose } = useDisclosure();
  // 画面遷移
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        //https://chakra-ui.com/docs/theming/theme#spacing
        // baseのpaddingは"0.75rem"でmd以上になったらpaddingを5: "1.25rem"に指定
        padding={{ base: 3, md: 5 }}
      >
        {/*  ヘッダーの「ユーザ管理アプリ」箇所 */}
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>
        {/*  自作nav */}
        <Flex
          align="center"
          fontSize="sm"
          // 自作navを左寄せ
          flexGrow={2}
          // スマホ表示の場合に自作navを非表示(none)、PC表示の場合に自作navを表示(flex)
          display={{ base: "none", md: "flex" }}
        >
          {/*  余白用 */}
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        {/*  chakraUIのハンバーガーメニュー */}
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      {/*  ハンバーガーメニューがクリックされた際に左からサイドメニュを表示する ※モーダルで使えそう */}
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
