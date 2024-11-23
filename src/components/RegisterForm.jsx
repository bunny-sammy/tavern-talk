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
        <div className="input-container-login">
          <label htmlFor="name">Nome</label>
          <div className="teste gradient-box">
            <input name="name" type="text" className="gradient-border"/>
          </div>
        </div>
        <div className="input-container-login">
          <label htmlFor="email">Email</label>
          <div className="teste gradient-box">
            <input name="email" type="email" className="gradient-border"/>
          </div>
        </div>
        <div className="input-container-login">
          <label htmlFor="password">Senha</label>
          <div className="teste gradient-box">
            <input name="password" type="password" className="gradient-border"/>
          </div>
        </div>

          <button>
              <img src="/assets/login-button.svg" alt="" />
          </button>
      </form>
    );
}