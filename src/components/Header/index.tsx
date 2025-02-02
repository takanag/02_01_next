// rafceと入力後にタブキーを押します🤗
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

// style.module.scssを読み込むには
// importというものを使い、ファイルを紐づける必要があります🤗

import style from "./style.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={style.header}>
      <ul>
        <li>
          <Link href={"/login"}>
            <LoginIcon />
            ログイン
          </Link>
        </li>
        <li>
          <Link href={"/signup"}>
            <AppRegistrationIcon />
            登録</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
