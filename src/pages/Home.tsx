import { CtaBanner } from "../sections/CtaBanner";
import { GrowthAlgorithm } from "../sections/GrowthAlgorithm";
import { Hero } from "../sections/Hero";
import { Impact } from "../sections/Impact";
import { Mandate } from "../sections/Mandate";
import { Services } from "../sections/Services";

export function Home() {
  return (
    <>
      <Hero />
      <Mandate />
      <Services />
      <GrowthAlgorithm />
      <Impact />
      <CtaBanner />
    </>
  );
}
