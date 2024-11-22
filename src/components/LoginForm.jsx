"use client";

import React from "react"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterForm () {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {  
          signIn("api/users/register", {
              email: data.email,
              password: data.password,
              redirect: false
          }).then(res => {
            if (res.ok) {
              router.push("/char/index");
            } else {
              console.log("User login failed.");
            }
          })
          
        } catch (error) {
          console.log("Error during login: ", error);
        }
    };

    return(
      <form onSubmit={handleSubmit} className="input_login">
          <h1>Email</h1>
          <input type="email" className="gradient-border"/>
          <h1>Senha</h1>
          <input type="password" className="gradient-border"/>

          <button>
              <img src="/assets/login-button.svg" alt="" />
          </button>
      </form>
    );
}