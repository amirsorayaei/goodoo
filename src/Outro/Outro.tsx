import React, { useState } from "react";
import Page from "../Page/Page";
import { createRandomNumber } from "../utils/random";
import { PINK } from "../styles/Colors";
import Image from "next/image";
import { Position } from "../utils/types";

interface Props {
  retry(): void;
}

const Outro = ({ retry }: Props) => {
  const [position, setPosition] = useState<Position | null>(null);
  const [finished, setFinished] = useState<boolean>(false);

  const onMouseMove = () => {
    const [right, left] = createRandomNumber(0, window.innerWidth - 150);
    const [top, bottom] = createRandomNumber(0, window.innerHeight - 40);

    setPosition({
      top,
      bottom,
      left,
      right,
    });
  };

  if (finished) {
    return (
      <Page>
        <Image
          src={"/goodoo/assets/image8.png"}
          alt="image8"
          width={window.innerWidth}
          height={200}
          style={{ marginTop: 100, marginBottom: 30, objectFit: "contain" }}
        />

        <h1 style={{ marginBottom: 20, color: "#232323" }}>عاقشتممممم 😍💙</h1>
        <button
          style={{
            padding: "0 24px",
            height: 40,
            backgroundColor: PINK[80],
            borderRadius: 10,
            borderWidth: 0,
            fontSize: 18,
            transition: "all 0.1s ease-in-out",
          }}
          onClick={retry}
        >
          از دوباره ببینم 🥹
        </button>
      </Page>
    );
  }

  return (
    <Page>
      <Image
        src={"/goodoo/assets/image8.png"}
        alt="image8"
        width={window.innerWidth}
        height={200}
        style={{ marginTop: 100, marginBottom: 30, objectFit: "contain" }}
      />
      <h1 style={{ marginBottom: 20, color: "#232323" }}>
        با من آشتی میکنی؟ 😔
      </h1>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={onMouseMove}
          style={{
            width: 150,
            height: 40,
            backgroundColor: PINK[80],
            borderRadius: 10,
            borderWidth: 0,
            transition: "all 0.1s ease-in-out",
            ...(Boolean(position)
              ? {
                  position: "absolute",
                  ...position,
                }
              : {}),
          }}
        >
          نخیرشم قهرم فعلا 😒
        </button>
        <button
          style={{
            width: 150,
            height: 40,
            backgroundColor: PINK[80],
            borderRadius: 10,
            borderWidth: 0,
            fontSize: 18,
            transition: "all 0.1s ease-in-out",
          }}
          onClick={() => setFinished(true)}
        >
          بره 🥹
        </button>
      </div>
    </Page>
  );
};

export default Outro;
