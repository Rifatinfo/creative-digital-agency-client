export async function getMeta() {
  const res = await fetch("https://creative-digital-agency-server.vercel.app/api/v1/meta", {
    method: "GET",
    credentials: "include",
    headers: {
      "Accept": "application/json",
    },
  });

  const text = await res.text();
  console.log("RAW RESPONSE:", text);

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Response is not JSON");
  }
}


