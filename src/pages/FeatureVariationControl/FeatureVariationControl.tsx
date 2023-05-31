import { useContext } from "react";
import { FeatureVariationContext } from "../../contexts/ABTestProvider";
import {
  AB_VARIATION_BOOK_DESCRIPTION,
  AB_VARIATION_COVER_PIC,
  AB_VARIATION_TEST,
} from "../../constants";
import { SmallTextBold } from "../../components/Typography/Typography.styles";
import { useAbTest } from "../../hooks/useAbTest";
import { FeatureToggleSummary } from "./FeatureVariationControl.styles";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const FeatureVariationControl = () => {
  const variation = useAbTest();
  const { assignFeatureVariation, featureVariation } = useContext(
    FeatureVariationContext
  );

  return (
    <div>
      <h1>Feature toggles for Blog articles</h1>
      <input
        type="checkbox"
        id={AB_VARIATION_COVER_PIC}
        name={AB_VARIATION_COVER_PIC}
        checked={
          featureVariation?.[AB_VARIATION_COVER_PIC] === AB_VARIATION_TEST ||
          false
        }
        onChange={(event) =>
          assignFeatureVariation?.(
            AB_VARIATION_COVER_PIC,
            event.target.checked ? "test" : "control"
          )
        }
      />
      <label htmlFor={AB_VARIATION_COVER_PIC}> Show Book cover pic</label>
      <br />
      <input
        type="checkbox"
        id={AB_VARIATION_BOOK_DESCRIPTION}
        name={AB_VARIATION_BOOK_DESCRIPTION}
        checked={
          featureVariation?.[AB_VARIATION_BOOK_DESCRIPTION] ===
            AB_VARIATION_TEST || false
        }
        onChange={(event) =>
          assignFeatureVariation?.(
            AB_VARIATION_BOOK_DESCRIPTION,
            event.target.checked ? "test" : "control"
          )
        }
      />
      <label htmlFor={AB_VARIATION_BOOK_DESCRIPTION}>
        {" "}
        Show Book description
      </label>
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
