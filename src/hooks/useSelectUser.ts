import { useCallback, useState } from "react";

import { User } from "../types/api/User";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザー情報を特定しモーダルを表示するためのカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;

    // ユーザー一覧の中からidと一致しているものtargetUserの中に格納
    const targetUser = users.find((user) => user.id === id);
    // ビックリマークを外すと型がundefindも考慮しろと怒ってくる
    setSelectedUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
