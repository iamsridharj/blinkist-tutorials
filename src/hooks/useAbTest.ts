import { useContext } from "react";
import { FeatureVariationContext } from "../contexts/ABTestProvider";
import { AB_VARIATION_CONTROL, AB_VARIATION_TEST } from "../constants";
import { isTestVariation } from "../utils/checkABVariation";

export const useAbTest = () => {
  const {
    featureVariation: { abVariationType },
  } = useContext(FeatureVariationContext);
  return isTestVariation(abVariationType)
    ? AB_VARIATION_TEST
    : AB_VARIATION_CONTROL;
};
