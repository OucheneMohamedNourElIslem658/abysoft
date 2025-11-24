import { cookies } from "next/headers";

export async function getLanguage() {
  const cookieStore = await cookies();
  return cookieStore.get("language")?.value || "en";
}