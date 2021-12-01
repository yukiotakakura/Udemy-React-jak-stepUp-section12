import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
// 境界線
import { User } from "../types/api/User";
import { useMessage } from "../hooks/useMessage";
import { UserLoginUser } from "./useLoginUser";

// ログイン処理を行うカスタムhooks(ログイン処理関数)
export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  // カスタムフック化したコンテキスト ※カスタムフック化することで楽になる
  const { setLoginUser } = UserLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({
              title: "ユーザーが見つかりません",
              status: "error"
            });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
