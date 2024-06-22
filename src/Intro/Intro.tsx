import React, { useEffect, useRef, useState } from "react";
import Page from "../Page/Page";
import Image from "next/image";
import { PINK } from "../styles/Colors";

interface Props {
  next(): void;
}

const Intro = ({ next }: Props) => {
  const [image, setImage] = useState<string>("");
  const [finished, setFinished] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const onClick = () => {
    if (audioRef.current)
      setTimeout(() => {
        audioRef.current?.play().then(() => {
          setFinished(false);

          setImage("/goodoo/assets/image1.png");

          setTimeout(() => {
            setImage("/goodoo/assets/image2.png");
          }, 1400);

          setTimeout(() => {
            setImage("/goodoo/assets/image3.png");
          }, 1400 + 600);

          setTimeout(() => {
            setImage("/goodoo/assets/image5.png");
          }, 1400 + 600 + 600);

          setTimeout(() => {
            setImage("/goodoo/assets/image7.png");
          }, 1400 + 600 + 600 + 1200);

          setTimeout(() => {
            setImage("/goodoo/assets/image3.png");
          }, 1400 + 600 + 600 + 1200 + 600);

          setTimeout(() => {
            setImage("/goodoo/assets/image1.png");
          }, 1400 + 600 + 600 + 1200 + 600 + 500);

          setTimeout(() => {
            setFinished(true);
          }, 1400 + 600 + 600 + 1200 + 600 + 500 + 1000);
        });
      }, 500);
  };

  return (
    <Page>
      {image ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!finished ? (
            <Image
              src={image}
              alt="image1"
              width={window.innerWidth}
              height={200}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div>
              <Image
                src={"/goodoo/assets/image9.png"}
                alt="image1"
                width={window.innerWidth}
                height={150}
                style={{ objectFit: "contain", marginBottom: 24 }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 auto",
                  gap: 10,
                  maxWidth: 200,
                }}
              >
                <button
                  style={{
                    padding: "0 24px",
                    height: 40,
                    backgroundColor: PINK[80],
                    borderRadius: 10,
                    borderWidth: 0,
                    transition: "all 0.1s ease-in-out",
                  }}
                  onClick={onClick}
                >
                  سلام دوباره به گودوو 😍
                </button>
                <button
                  style={{
                    padding: "0 24px",
                    height: 40,
                    backgroundColor: PINK[80],
                    borderRadius: 10,
                    borderWidth: 0,
                    transition: "all 0.1s ease-in-out",
                  }}
                  onClick={next}
                >
                  نه بریم بعدی 🙄
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              padding: "0 24px",
              height: 60,
              backgroundColor: PINK[80],
              borderRadius: 10,
              borderWidth: 0,
              fontSize: "1.3rem",
              transition: "all 0.1s ease-in-out",
            }}
            onClick={onClick}
          >
            سلام گودوو👋🏻😍
          </button>
        </div>
      )}

      <audio
        id="audio"
        ref={audioRef}
        src="/goodoo/salam.mp3"
        playsInline
        style={{ display: "none" }}
      />
    </Page>
  );
};

export default Intro;
