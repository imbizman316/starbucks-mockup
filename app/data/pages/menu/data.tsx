export enum Sizes {
  short = "short",
  tall = "tall",
  grande = "grande",
  venti = "venti",
}

export const sizes: {
  size: Sizes | string;
  quantity: number;
}[] = [
  {
    size: Sizes.short,
    quantity: 8,
  },
  {
    size: Sizes.tall,
    quantity: 12,
  },
  {
    size: Sizes.grande,
    quantity: 16,
  },
  {
    size: Sizes.venti,
    quantity: 20,
  },
];
