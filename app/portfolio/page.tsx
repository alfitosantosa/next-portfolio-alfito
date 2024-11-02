import { BentoDemo } from "@/components/bento-grid-provider";

import Ripple from "@/components/ui/ripple";

export default function Page() {
  return (
    <>
      <div className="items-center justify-items-center"></div>
      <BentoDemo />
      <div className="">
        <Ripple />
      </div>
    </>
  );
}
