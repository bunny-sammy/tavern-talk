"use client";

import React from "react"
import { useRouter } from "next/navigation";

export default function RegisterForm () {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {  
          const userExists = await fetch("api/users/exists", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: data.email }),
          }).then((res) => res.json())
          .then((result) => {
            return result.user;
          })
          
          if (!userExists) {
            fetch("api/users/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }).then((res) => {
              if (res.ok) {
                router.push("/login");
              } else {
                console.log("User registration failed.");
              }
            })
          }

        } catch (error) {
          console.log("Error during registration: ", error);
        }
    };

    return(
      <form onSubmit={handleSubmit} className="input_login">
          <h1>Nome</h1>
          <input name="name" type="text" className="gradient-border"/>
          <h1>Email</h1>
          <input name="email" type="email" className="gradient-border"/>
          <h1>Senha</h1>
          <input name="password" type="password" className="gradient-border"/>

          <button>
              <img src="/assets/login-button.svg" alt="" />
          </button>
      </form>
    );
}