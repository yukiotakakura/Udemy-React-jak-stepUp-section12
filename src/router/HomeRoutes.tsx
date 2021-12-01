import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

/**
 * ルーティングを配列で設定
 */
export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    childeren: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    childeren: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    childeren: <Setting />
  },
  // /homeディレクトリ配下に存在しないURLが入力されている場合に対しても404ページを設定
  {
    path: "*",
    exact: false,
    childeren: <Page404 />
  }
];
