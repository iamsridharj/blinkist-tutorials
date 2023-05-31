import { AB_VARIATION_CONTROL, AB_VARIATION_TEST } from "../constants";

export const randomisedFeatureVariationGenerator = (): "control" | "test" =>
  Math.random() < 0.5 ? AB_VARIATION_CONTROL : AB_VARIATION_TEST;
