import { AB_VARIATION_TEST } from "../constants";

export const isTestVariation = (variation: string) =>
  variation === AB_VARIATION_TEST;
