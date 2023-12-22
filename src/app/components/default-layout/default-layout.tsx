"use client";

import { useEffect, useLayoutEffect } from "react";
import { initializeApp } from "./initalize-app";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    initializeApp();
  }, []);

  return <div>{children}</div>;
};
