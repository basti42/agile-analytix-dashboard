import type { Handle, HandleFetch } from "@sveltejs/kit";

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
  request.headers.set("origin", request.url);
  return fetch(request);
};

// export const handle: Handle = async ({resolve, event}) => {
//     console.log("Client hook applied");
//     const response = await resolve(event);

//     if (event.url.pathname.startsWith('/')) {
//         if (event.request.method === 'OPTIONS') {
//             return new Response(null, {
//                 headers: {
//                     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
//                     'Access-Control-Allow-Origin': '*'
//                 }
//             });
//         }
//         response.headers.append('Access-Control-Allow-Origin', `*`);
//     }
//     return response;
// };
