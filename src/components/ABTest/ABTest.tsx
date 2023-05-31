import { ReactElement, useContext } from "react";
import { useAbTest } from "../../hooks/useAbTest";
import { FeatureVariationContext } from "../../contexts/ABTestProvider";
import { isTestVariation } from "../../utils/checkABVariation";

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

  const checkFeatureVariation = (): boolean => {
    if (featureVariationKey) {
      const result = featureVariationKey
        ? isTestVariation(featureVariation?.[featureVariationKey])
        : false;
      return result;
    }
    return isTestVariation(variation);
  };

  return checkFeatureVariation() ? test : control;
};

export default ABTest;
