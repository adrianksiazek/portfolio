"use client";

import { initializeApp } from "./initalize-app";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  initializeApp();

  return <div>{children}</div>;
};
