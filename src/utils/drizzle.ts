// eslint-disable-next-line @typescript-eslint/naming-convention
export const enumToPgEnum = <T extends Record<string, any>>(
  myEnum: T,
): [T[keyof T], ...T[keyof T][]] => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return Object.values(myEnum).map((value: any) => `${value}`) as any;
};
