'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoginForm } from "./components/loginForm";

const LoginPage = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => router.push("/login"), 2000); // Redirect to login instead of home
    }, []);

    return <div>You have logged in... redirecting in a sec.</div>;
};

export default LoginForm;
