"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const userExists = await fetch("/api/users/exists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      })
        .then((res) => res.json())
        .then((result) => result.user);

      if (userExists) {
        const loginResponse = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });

        if (loginResponse.ok) {
          router.push(`/char/index/${userExists._id}`);
        } else {
          setError("Falha ao fazer login. Verifique suas credenciais e tente novamente.");
        }
      } else {
        setError("Usuário não encontrado. Verifique o e-mail ou registre-se.");
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      setError("Ocorreu um erro inesperado. Tente novamente mais tarde.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input_login">
      <div className="input-container-login">
        <label htmlFor="email">Email</label>
        <div className="teste gradient-box">
          <input name="email" type="email" className="gradient-border" required />
        </div>
      </div>
      <div className="input-container-login">
        <label htmlFor="password">Senha</label>
        <div className="teste gradient-box">
          <input name="password" type="password" className="gradient-border" required />
        </div>
      </div>
      {error && <span className="error-message">{error}</span>}
      <button type="submit">
        <img src="/assets/login-button.svg" alt="Login" />
      </button>
    </form>
  );
}
