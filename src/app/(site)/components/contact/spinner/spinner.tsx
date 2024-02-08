import Image from "next/image";
import React from "react";

export const Spinner = () => {
  return (
    <div className="animate-spin">
      <Image priority src="/images/spinner.svg" alt="spinner" height={24} width={24} />
    </div>
  );
};
