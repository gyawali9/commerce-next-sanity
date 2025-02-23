export const COUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  CHRISTMAS: "CHRISTMAS",
  NEW_YEAR: "NEW_YEAR",
  VALENTINES_DAY: "VALENTINES_DAY",
  HALLOWEEN: "HALLOWEEN",
  EASTER: "EASTER",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
