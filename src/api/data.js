export async function getAppPromise() {
  const response = await fetch("/data/data.json");
  return response.json();
}
