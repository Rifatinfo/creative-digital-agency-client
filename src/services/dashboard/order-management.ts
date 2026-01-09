/* eslint-disable @typescript-eslint/no-explicit-any */

// // orderDashboard.ts
// import { NextRequest } from "next/server";

// export async function orderDashboard(cookie?: string, queryString?: string) {
//   try {
//     const response = await fetch(
//       `http://localhost:5000/api/v1/booking/order-history${queryString ? `?${queryString}` : ""}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           // Forward token cookie if provided
//           ...(cookie ? { Cookie: cookie } : {}),
//         },
//       }
//     );

//     // Check if backend returned an error page (HTML) instead of JSON
//     if (!response.ok) {
//       const text = await response.text();
//       console.error("API returned error:", text);
//       return {
//         success: false,
//         message: "Failed to fetch order history",
//         data: [],
//       };
//     }

//     const result = await response.json();
//     console.log("Order Dashboard Result:", result);
//     return result;

//   } catch (error: any) {
//     console.error("Fetch failed:", error);
//     return {
//       success: false,
//       message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}`,
//       data: [],
//     };
//   }
// }


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




