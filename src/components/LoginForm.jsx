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

          if (userExists) {
            fetch("/api/auth/login", {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: data.email,
                password: data.password
              })
            })
            .then(res => {
              if (res.ok) {
                router.push("/char/index/"+userExists._id);
              } else {
                console.log("User login failed.");
              }
            })
          }
        } catch (error) {
          console.log("Error during login: ", error);
        }
    };

    return(
      <form onSubmit={handleSubmit} className="input_login">
          <h1>Email</h1>
          <div className="teste gradient-box">
            <input name="email" type="email" className="gradient-border"/>
          </div>
          <h1>Senha</h1>
          <div className="teste gradient-box">
            <input name="password" type="password" className="gradient-border"/>
          </div>

          <button>
              <img src="/assets/login-button.svg" alt="" />
          </button>
      </form>
    );
}