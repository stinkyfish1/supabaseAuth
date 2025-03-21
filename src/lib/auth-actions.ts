"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
    const supabase = createClient();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    console.log("Attempting login with:", email, password);

    if (error) {
        console.error("Login error:", error);
        return redirect(`/error?message=${encodeURIComponent(error.message)}`);
    }

    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
        console.error("No session found after login.");
        return redirect("/error?message=No session found after login.");
    }

    revalidatePath("/", "layout");
    redirect("/");
}


export async function signup(formData: FormData) {
    const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
            options: {
            data: {
                full_name: `${firstName + " " + lastName}`,
                email: formData.get("email") as string,
            },
            },
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
}

export async function signout() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error);
        redirect("/error");
    }

    redirect("/logout");
}