import { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

type Props = {
  onOpen: () => void;
};

/**
 * atoms粒度なハンバーガーメニューコンポーネントを定義
 */
export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      // スマホ表示の場合にハンバーガーメニューを表示(block)、PC表示の場合にハンバーガーメニューを表示(none)
      display={{ base: "block", md: "none" }}
      // ハンバーガーメニューが押された場合に右からサイドメニュー(下に定義してある)を表示する
      onClick={onOpen}
    />
  );
});
