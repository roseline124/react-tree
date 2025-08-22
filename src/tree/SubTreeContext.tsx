import * as React from "react";

export interface SubTreeContextValue {}

export const SubTreeContext = React.createContext<
  SubTreeContextValue | null | undefined
>(undefined);

SubTreeContext.displayName = "SubTreeContext";
