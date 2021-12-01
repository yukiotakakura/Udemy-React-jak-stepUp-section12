import { ChangeEvent, memo, useState, VFC } from "react";
import { Box, Divider, Flex, Heading, Stack, Input } from "@chakra-ui/react";

// 外部コンポーネント と 内部コンポーネントの境界
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

/**
 * pages粒度なログイン画面コンポーネントを定義
 */
export const Login: VFC = memo(() => {
  // ログイン処理を行うカスタムhooksを呼び出す
  const { login, loading } = useAuth();

  // inputタグ(テキストボックス)を保持するstate変数
  const [userId, setUserId] = useState("");
  // inputタグから入力値を受け取る為の前準備(型指定)
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  // ログインボタンが押下された場合は、login処理を行う（カスタムhooks）
  const onClickLogin = () => {
    login(userId);
  };

  return (
    // 左右上下中央寄せにする
    <Flex align="center" justify="center" height="100vh">
      {/*  ログイン画面の入力エリアに対して、スタイルを適用 */}
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        {/*  Dividerは、境界線みたいなやつ */}
        <Divider my={4} />
        {/*  Stackは、囲った中の要素を等感覚で配置していくときに便利 */}
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
