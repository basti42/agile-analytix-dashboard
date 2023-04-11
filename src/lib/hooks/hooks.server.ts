import type { Handle, HandleFetch, HandleServerError } from "@sveltejs/kit";


export const handleFetch: HandleFetch = async({request, fetch, event}) => {
    request.headers.set('Origin', event.url.origin);
    return fetch(request)
};


export const handleError: HandleServerError = async({event, error}) => {
    console.error("Error caught:");
    console.error(error)
};

// export const handle: Handle = async ({resolve, event}) => {
//     console.log("Server hook applied");
//     const response = await resolve(event);

//     console.log(`request pathname: ${event.url.pathname}`);

//     if (event.url.pathname.startsWith('/app')) {
//         if (event.request.method === 'OPTIONS') {
//             return new Response(null, {
//                 headers: {
//                     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
//                     'Access-Control-Allow-Origin': '*'
//                 }
//             });
//         }
//         response.headers.append('Access-Control-Allow-Origin', "*");
//         console.log(response.headers)
//     }
//     return response;
// };