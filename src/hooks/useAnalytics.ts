import { LOCAL_STORAGE_RESULT } from "../constants";

type TrackingTypes = {
  articleId?: string;
  pageType?: string;
  eventType?: string;
  variation: "control" | "test";
};

type UseAnalyticsProps = {
  trackPageview: ({ articleId, eventType, variation }: TrackingTypes) => void;
  trackUserEvent: ({ pageType, eventType, variation }: TrackingTypes) => void;
};

export const useAnalytics = (): UseAnalyticsProps => {
  const trackPageview = ({ articleId, eventType, variation }: TrackingTypes) =>
    console.log({ articleId, eventType, variation });

  const trackUserEvent = ({ variation }: TrackingTypes) => {
    const result = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_RESULT) || "{}"
    );
    result[variation] = result[variation] + 1 || 1;
    localStorage.setItem(LOCAL_STORAGE_RESULT, JSON.stringify(result));
  };

  return {
    trackPageview,
    trackUserEvent,
  };
};
