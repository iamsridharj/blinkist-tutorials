import { ReactElement, useContext } from "react";
import { useAbTest } from "../../hooks/useAbTest";
import { AB_VARIATION_TEST } from "../../constants";
import { FeatureVariationContext } from "../../contexts/ABTestProvider";

type ABTestProps = {
  test: ReactElement;
  control: ReactElement;
  featureVariationKey?: string;
};

const ABTest: React.FC<ABTestProps> = ({
  test,
  control,
  featureVariationKey,
}): JSX.Element => {
  const variation = useAbTest();
  const { featureVariation } = useContext(FeatureVariationContext);

  const isTestFeatureVariation = (): boolean => {
    if (featureVariationKey) {
      const result = featureVariationKey
        ? featureVariation?.[featureVariationKey] === AB_VARIATION_TEST
        : false;
      return result;
    }
    const result = variation === AB_VARIATION_TEST;
    return result;
  };

  return isTestFeatureVariation() ? test : control;
};

export default ABTest;
