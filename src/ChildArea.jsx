import React, { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "red"
};

const ChildArea = memo((props) => {
  //memoはpropsが変更されない限り再レンダリングされないようになる
  const { open, onClickClose } = props;

  const data = [...Array(200).keys()];
  // console.log(data);
  data.forEach(() => {
    console.log("...");
  });

  console.log("レンダリングされました");

  return (
    <>
      {open ? (
        <div style={style}>
          <button onClick={onClickClose}>閉じる</button>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
