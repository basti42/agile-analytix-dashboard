import type { Handle, HandleFetch } from "@sveltejs/kit";

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
  request.headers.set("origin", request.url);
  return fetch(request);
};
