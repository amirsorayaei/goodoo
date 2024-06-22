import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Page from "../Page/Page";
import Image from "next/image";
import { PINK } from "../styles/Colors";

interface Props {
  next(): void;
}

const Descriptions = ({ next }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000 * 135);
  }, []);

  return (
    <Page>
      <div
        style={{
          margin: "124px 16px 0",
          display: "flex",
          flexDirection: "column-reverse",
          height: 400,
          alignItems: "end",
          whiteSpace: "pre-wrap",
          overflowY: "scroll",
          textAlign: "center",
        }}
      >
        <TypeAnimation
          sequence={[
            "میدونی که بهترین شخص زندگی من تو دنیا تویی\nمیدونی که بدون تو نمیتونم ادامه بدم همیشه اذیتت میکنم ولی تو ذره ای بهم بی احترامی نمیکنی و هوامو داری\nمن همیشه تو دلم تو رو به عنوان دختری که میدونم تا آخر عمرم میخوامش میپرستم\nببخش که اذیتت میکنم\nببخش بعضی اوقات دیوونه میشم و نمیفهمم چی به چی میگذره\nبودن تو کنارم آرامشیه که تو این روزای سخت برام لذت بخش و حس به ثمر رسیدنش رو بهم میده\nحس اینکه با کنار تو بودن میتونم به اون چیزایی که میخوام میرسم\nمیدونم وقتی تو کنارمی باعث میشه پیشرفت کنم\nهمیشه دنبال این بودم منم این حس رو بهت بدم بتونم باعث پیشرفتت بشم باعث لبخند زدنت باعث حال خوبت باعث اینکه ذره ای احساس آرامش و اعتماد تو زندگیت داشته باشی بدونی یکی هست که وقت هست دیگه خیالم راحته\nتو به من این حسو میدی که ترس از دست دادنت رو دارم ترس نبودنت رو دارم ترس اینکه فکر کنم با خودم دیگه رها پیشم نیست\nدیگه کسی نیستش که خودشو برام لوس کنه منم ذوق کنم عین دختر بچم از اون چشمای خوشگلش ذوق کنم\nترس از اینکه دیگه نتونم بهت بگم گودوی من دیگه نتونم اونجوری که میخوام صدات کنم\nمن تو رو با تمام وحودم میخوام رها جونم از صمیم قلبم میخوام کنارم بمونی و برام باشی\nمیدونم کنار تو همه چی خوبه کنار تو باهم دیگه به اون آرزوهای قشنگمون میرسیم این روزای سختمون تموم میشه و بهترین و جدیدترین خاطراتمون رو کنار هم میسازیم\nجوری که میگیم سخت بود ولی بالاخره شد و تونستیم\nازت انتظار ندارم باهام آشتی کنی ولی دوست داشتم اینطوری بهت بگم چقد دوست دارم\nچقد میمیرم برات\nچقد تو این دنیا میخوامت که تو برام اولویت داری\nو چقدد عاقشتمممممم و تو تنهاترین و بهترین و گودوترین دختری هستی که تو کل این دنیا من باهاش آشنا شدم\nدوست دارم رهاجون من💙",
          ]}
          wrapper="span"
          speed={20}
          style={{ fontSize: "1rem", fontWeight: "bold", color: "#232323" }}
        />
      </div>
      <Image
        src="/assets/image7.png"
        alt="image1"
        width={300}
        height={150}
        style={{ objectFit: "contain", marginTop: 16 }}
      />

      {visible && (
        <button
          style={{
            padding: "0 24px",
            height: 40,
            backgroundColor: PINK[80],
            borderRadius: 10,
            borderWidth: 0,
            transition: "all 0.1s ease-in-out",
            marginTop: 20,
          }}
          onClick={next}
        >
          بعدی 😍
        </button>
      )}
    </Page>
  );
};

export default Descriptions;
