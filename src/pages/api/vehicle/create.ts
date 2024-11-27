import type { APIRoute } from "astro";
import { genPatente, genColor, genMarca, genTipo } from "@lib/aleatorio";
import { createVehicle } from "@controllers/parking.controller"

export const POST: APIRoute = async ({ request }) => {
    try {

        const data = await request.json();
        if (!data) {
            return new Response(
                JSON.stringify({ error: "Error: No data Passed" }),
                {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }
        const createdVehicle = await createVehicle({ patente: genPatente(), color: genColor(), marca: genMarca(), tipo: genTipo(), slot: data.slot });
        // Return success response
        return new Response(
            JSON.stringify({ success: true, data: createdVehicle }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
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