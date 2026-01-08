/* eslint-disable @typescript-eslint/no-explicit-any */

export async function getBookings(queryString?: string) {
    try {
        const response = await fetch(
            `https://creative-digital-agency-server.vercel.app/api/v1/payment/all-booking${queryString ? `?${queryString}` : ""}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const result = await response.json();
        
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}