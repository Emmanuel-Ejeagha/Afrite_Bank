"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimals={2} decimal="." prefix="₦" end={270500} />
    </div>
  );
};

export default AnimatedCounter;
