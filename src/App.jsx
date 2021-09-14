import React, { useEffect, useState } from "react";
import ColorfulMassage from "./components/ColorfulMassage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFacesShowFlg] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlg = () => {
    setFacesShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFacesShowFlg(true);
      } else {
        faceShowFlg && setFacesShowFlg(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMassage color="blue">
        <div>お元気ですか?</div>
        <div>Test</div>
      </ColorfulMassage>
      <ColorfulMassage color="pink">元気です</ColorfulMassage>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlg}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlg && <p>( *´艸｀)</p>}
    </>
  );
};

export default App;
