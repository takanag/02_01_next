// rafceと入力後タブキーを押すと自動でコンポーネントの雛形が作成される
// control + Dで同じ文字列を一括選択できる

import React from "react";
import styles from "./style.module.scss";

type PostProps = {
  id: number;
  name: string;
  date: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ id, name, date, content }) => {
  return (
    <div className={styles.post}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{date}</p>
      <p>{content}</p>
      <p className={styles.link}>リンクが入ります</p>
    </div>
  );
};

export default Post;
