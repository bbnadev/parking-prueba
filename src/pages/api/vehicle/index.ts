import type { APIRoute } from "astro";
import { getVehicles } from "@controllers/parking.controller";

export const GET: APIRoute = async ({ cookies }) => {
    try {

        const vehicles = await getVehicles()

        // Return success response
        return new Response(JSON.stringify({ success: true, data: vehicles }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        // Log the error for server-side debugging.
        console.error(error);
        let errorMessage = "Internal Server Error";
        let statusCode = 500;

        // Check if error is an instance of Error
        if (error instanceof Error) {
            errorMessage = error.message;
            // If the error object has a 'statusCode' property, use it.
            statusCode = (error as { statusCode?: number }).statusCode || 500;
        }

        // Return a generic error response or customize based on the error type
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: statusCode,
            headers: { "Content-Type": "application/json" },
        });
    }
};
