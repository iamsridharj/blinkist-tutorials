import { useContext } from "react";
import { FeatureVariationContext } from "../contexts/ABTestProvider";
import { AB_VARIATION_CONTROL, AB_VARIATION_TEST } from "../constants";

export const useAbTest = () => {
  const {
    featureVariation: { abVariationType },
  } = useContext(FeatureVariationContext);
  return abVariationType === AB_VARIATION_TEST
    ? AB_VARIATION_TEST
    : AB_VARIATION_CONTROL;
};
