import "./styles.css";
import { useState, useCallback, useMemo } from "react";
import ChildArea from "./ChildArea";

export default function App() {
  const [text, setText] = useState("");

  // const onClickCountUp = () => {
  //   setCount(count + 1);
  // };

  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onChangeOpen = () => {
    setOpen(!open);
  };

  // const onClickClose = () => {
  //   setOpen(false);
  // };

  //アロー関数で書いた関数は実行するたびに毎回新しい関数を生成しているとみなされpropsが変更されていると認識される
  //→memo化しても再レンダリングされるようになる
  //→そこで→usecallbackを使ってonCLickClose関数を書き直す

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  //第二引数には監視する値を入れる事が出来る

  //変数のmemo化する時にはusememoを使う
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <button onClick={onChangeOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
