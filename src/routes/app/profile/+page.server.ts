export const actions = {
  connectJira: async ({ cookies, request }) => {
    const data = await request.formData();
    console.log(data);
    return { success: true };
  },
};
