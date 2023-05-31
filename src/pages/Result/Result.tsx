import {
  AB_VARIATION_CONTROL,
  AB_VARIATION_TEST,
  LOCAL_STORAGE_RESULT,
} from "../../constants";
import { SmallTextBold } from "../../components/Typography/Typography.styles";

const Result = () => {
  const finalResult = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_RESULT) || "{}"
  );

  return (
    <>
      <SmallTextBold
        className={`${
          finalResult?.[AB_VARIATION_CONTROL] > finalResult?.[AB_VARIATION_TEST]
            ? "success"
            : ""
        }`}
      >
        Control Variation - {finalResult?.[AB_VARIATION_CONTROL]}
      </SmallTextBold>
      <SmallTextBold
        className={`${
          finalResult?.[AB_VARIATION_TEST] > finalResult?.[AB_VARIATION_CONTROL]
            ? "success"
            : ""
        }`}
      >
        Test Variation - {finalResult?.[AB_VARIATION_TEST]}
      </SmallTextBold>
    </>
  );
};

export default Result;
