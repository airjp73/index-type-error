const THING = "thing" as const;

export type TestType = {
  [key: `${typeof THING}_${string}`]: any;
};

const example: TestType = {
  thing_asdf: "hello",
  // @ts-expect-error - should be invalid
  invalid: 123,
};
