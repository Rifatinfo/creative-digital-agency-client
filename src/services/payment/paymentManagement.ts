/* eslint-disable @typescript-eslint/no-explicit-any */

export async function getPayments(queryString?: string) {
  try {
    const url = `http://localhost:5000/api/v1/payment/all-payments${queryString ? `?${queryString}` : ""}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    //   credentials: "include", // 🔹 if you need auth cookies
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    
    return result;
  } catch (error: any) {
    console.error("getPayments error:", error.message || error);
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
    };
  }
}
