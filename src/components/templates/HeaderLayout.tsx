import { memo, ReactNode, VFC } from "react";
// 外部コンポーネント と 内部コンポーネントの境界
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

/**
 * ヘッダーレイアウトコンポーネントを定義
 */
export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
