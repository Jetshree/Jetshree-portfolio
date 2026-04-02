import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-background">
      <MacbookScroll
        title={
          <span className="text-white">
            This Macbook is built with Tailwind CSS. <br /> High performance, pure design.
          </span>
        }
        src={`/portfolio-preview.png`}
        showGradient={false}
      />
    </div>
  );
}
