/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function getContentService() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/service`);
    const result = await res.json();
    return result;
    // return result.data.find(
    //     (item : any) => item.id === "content-development"
    // )
}
