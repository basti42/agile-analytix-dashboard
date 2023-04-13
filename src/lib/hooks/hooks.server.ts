import type { Handle, HandleFetch, HandleServerError } from "@sveltejs/kit";

export const handleFetch: HandleFetch = async ({ fetch, request, event }) => {
  request.headers.set("Origin", event.url.origin);
  return fetch(request);
};

export const handleError: HandleServerError = async ({ event, error }) => {
  console.error("Error caught:");
  console.error(error);
};
