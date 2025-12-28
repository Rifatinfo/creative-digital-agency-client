"use server";

export async function processCheckout(serviceId : string, planTier : string) {
    console.log(`Server received: Service - ${serviceId}, Plan - ${planTier}`);

    // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/service`, {
    //     method : "POST"
    // })
}