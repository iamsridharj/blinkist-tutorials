import { useContext } from "react";
import { FeatureVariationContext } from "../../contexts/ABTestProvider";
import {
  AB_VARIATION_BOOK_DESCRIPTION,
  AB_VARIATION_COVER_PIC,
  AB_VARIATION_TEST,
} from "../../constants";
import { SmallTextBold } from "../../components/Typography/Typography.styles";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useAbTest } from "../../hooks/useAbTest";
import { FeatureToggleSummary } from "./FeatureVariationControl.styles";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { isTestVariation } from "../../utils/checkABVariation";

const FeatureVariationControl = () => {
  const variation = useAbTest();
  const { assignFeatureVariation, featureVariation } = useContext(
    FeatureVariationContext
  );

  return (
    <div>
      <h1>Feature toggles for Blog articles</h1>

      <Checkbox
        id={AB_VARIATION_COVER_PIC}
        isChecked={
          isTestVariation(featureVariation?.[AB_VARIATION_COVER_PIC]) || false
        }
        onChange={(event) =>
          assignFeatureVariation?.(
            AB_VARIATION_COVER_PIC,
            event.target.checked ? "test" : "control"
          )
        }
        label="Show Book cover pic"
      />
      <Checkbox
        id={AB_VARIATION_BOOK_DESCRIPTION}
        isChecked={
          isTestVariation(featureVariation?.[AB_VARIATION_BOOK_DESCRIPTION]) ||
          false
        }
        onChange={(event) =>
          assignFeatureVariation?.(
            AB_VARIATION_BOOK_DESCRIPTION,
            event.target.checked ? "test" : "control"
          )
        }
        label="Show Book description"
      />
      <FeatureToggleSummary>
        <SmallTextBold>
          Website AB Type: {capitalizeFirstLetter(variation)}
        </SmallTextBold>
        <SmallTextBold>
          Blog Book Cover AB Type:{" "}
          {capitalizeFirstLetter(featureVariation?.[AB_VARIATION_COVER_PIC])}
        </SmallTextBold>
        <SmallTextBold>
          Blog Book Description AB Type:{" "}
          {capitalizeFirstLetter(
            featureVariation?.[AB_VARIATION_BOOK_DESCRIPTION]
          )}
        </SmallTextBold>
      </FeatureToggleSummary>
    </div>
  );
};

export default FeatureVariationControl;
