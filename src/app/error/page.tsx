"use client";
import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
    const searchParams = useSearchParams();
    const errorMessage = searchParams.get("message") || "An unknown error occurred.";

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold text-red-500">Login Error</h1>
            <p className="mt-2 text-gray-700">{errorMessage}</p>
            <a href="/" className="mt-4 text-blue-500 underline">
                Go back to Home
            </a>
        </div>
    );
}
