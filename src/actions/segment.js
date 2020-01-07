import { EventTypes } from "redux-segment";

const createTrackEvent = (type, event, page) => {
    return {
        type,
        meta: {
            analytics: {
                eventType: EventTypes.track,
                eventPayload: {
                    event,
                    options: {
                        page
                    }
                }
            }
        }
    };
};

export const pageViewEvent = (name, path) => {
    return {
        type: "PAGE_VIEW_EVENT",
        meta: {
            analytics: {
                eventType: EventTypes.page,
                eventPayload: {
                    name,
                    properties: {
                        path,
                    }
                }
            }
        }
    };
};

export const socialButton = () =>
    createTrackEvent("BUTTON PRESSED", "SOCIAL BUTTON");

export const articleButton = () =>
    createTrackEvent("BUTTON PRESSED", "ARTICLE BUTTON");