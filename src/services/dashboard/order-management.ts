/* eslint-disable @typescript-eslint/no-explicit-any */


export async function orderDashboard(queryString?: string) {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/booking/order-history${queryString ? `?${queryString}` : ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ include cookies
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("API returned error:", text);
      return {
        success: false,
        message: "Failed to fetch order history",
      };
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}




