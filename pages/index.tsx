import Descriptions from "@/src/Descriptions/Descriptions";
import Intro from "@/src/Intro/Intro";
import Outro from "@/src/Outro/Outro";
import { useState } from "react";

enum STEPS {
  STEP1,
  STEP2,
  STEP3,
}

export default function Home() {
  const [step, setStep] = useState<STEPS>(STEPS.STEP2);

  return (
    <>
      {step === STEPS.STEP1 && <Intro next={() => setStep(STEPS.STEP2)} />}
      {step === STEPS.STEP2 && (
        <Descriptions next={() => setStep(STEPS.STEP3)} />
      )}
      {step === STEPS.STEP3 && <Outro retry={() => setStep(STEPS.STEP1)} />}
    </>
  );
}
