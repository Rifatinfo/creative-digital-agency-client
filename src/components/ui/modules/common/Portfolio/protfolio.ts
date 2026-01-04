/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getAdmins() {
    try {
        const response = await fetch(
            `http://localhost:5000/api/v1/campaign`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const result = await response.json();
        console.log(result?.data?.data);
        
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}