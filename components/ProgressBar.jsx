"use client"; // <--- This is the magic line

import NextTopLoader from "nextjs-toploader";

export default function ProgressBar() {
  return (
    <NextTopLoader
      color="#8B0000"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #D4AF37,0 0 5px #D4AF37"
      zIndex={1600}
    />
  );
}