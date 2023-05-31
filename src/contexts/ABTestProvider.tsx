import { ReactNode, useState, useEffect, createContext } from "react";
import { LOCAL_STORAGE_VARIATION } from "../constants";
import { randomisedFeatureVariationGenerator } from "../utils/randomGenerator";

type ABTestProviderProps = {
  children: ReactNode;
};

type FeatureVariationContext = {
  featureVariation: Record<string, string>;
  assignFeatureVariation?: (
    featureVariationType: string,
    variation: "control" | "test"
  ) => void;
};

export const FeatureVariationContext = createContext<FeatureVariationContext>({
  featureVariation: {
    abVariationType: "",
  },
});

export const ABTestProvider = ({ children }: ABTestProviderProps) => {
  const [featureVariation, setFeatureVariation] = useState({
    ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_VARIATION) || "{}"),
  });

  useEffect(() => {
    const assignedABVariation = randomisedFeatureVariationGenerator();
    const newFeatureVariation = {
      ...featureVariation,
      abVariationType: assignedABVariation,
    };
    setFeatureVariation(newFeatureVariation);
    localStorage.setItem(
      LOCAL_STORAGE_VARIATION,
      JSON.stringify(newFeatureVariation)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const assignFeatureVariation = (
    featureVariationType: string,
    variation: "control" | "test"
  ) => {
    const newFeatureVariation = {
      ...featureVariation,
      [featureVariationType]: variation,
    };
    setFeatureVariation(newFeatureVariation);
    localStorage.setItem(
      LOCAL_STORAGE_VARIATION,
      JSON.stringify(newFeatureVariation)
    );
  };

  return (
    <FeatureVariationContext.Provider
      value={{
        featureVariation,
        assignFeatureVariation,
      }}
    >
      {children}
    </FeatureVariationContext.Provider>
  );
};
