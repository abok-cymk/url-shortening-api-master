import React from "react";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";

const BoostLinks = () => {
  return (
    <section className="boost__link">
      <div className="max-w-md mx-auto py-20 text-center">
        <Heading as="h2" className="text-white font-bold text-4xl pb-6">Boost your links today</Heading>
        <Button type="button" className="rounded-full">Get started</Button>
      </div>
    </section>
  );
};

export default BoostLinks;
