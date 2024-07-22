"use server";

export async function createTopic(formData: FormData) {
  //TODO: revalidate the home page
  const name = formData.get("name");
  const desc = formData.get("description");
}
