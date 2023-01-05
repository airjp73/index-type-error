const THING = "thing" as const;

export type TestType = {
  [key: `${typeof THING}_${string}`]: any;
};
