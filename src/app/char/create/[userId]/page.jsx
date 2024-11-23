'use client';

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import NavBar from "/src/components/NavBar";
import "./style.scss";
import Header from "/src/components/Header";
export default function Create({params}) {
    const router = useRouter();
    const [userId, setUserId] = useState(null);

    
    const SendIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5755 2.42438C21.3399 2.18867 21.0457 2.02003 20.7232 1.93583C20.4007 1.85162 20.0617 1.8549 19.7409 1.94531L19.7202 1.95188L1.72867 7.40625C1.36378 7.51209 1.03965 7.72627 0.799216 8.02044C0.558778 8.31461 0.413378 8.67487 0.382272 9.05353C0.351167 9.43218 0.435825 9.81134 0.625033 10.1408C0.81424 10.4703 1.09907 10.7345 1.4418 10.8984L9.28117 14.7188L13.0977 22.5609C13.2482 22.881 13.487 23.1514 13.7859 23.3404C14.0849 23.5294 14.4316 23.6291 14.7852 23.6278C14.8387 23.6278 14.893 23.6278 14.9474 23.6213C15.3271 23.592 15.6886 23.4469 15.9831 23.2054C16.2775 22.9639 16.4907 22.6378 16.5937 22.2713L22.048 4.27969C22.0508 4.273 22.053 4.26611 22.0546 4.25906C22.145 3.93827 22.1483 3.59918 22.0641 3.2767C21.9799 2.95422 21.8113 2.66001 21.5755 2.42438ZM14.7102 20.7253L11.488 14.1028L15.8005 9.795C15.9052 9.69036 15.9882 9.56612 16.0448 9.42939C16.1015 9.29267 16.1306 9.14612 16.1306 8.99813C16.1306 8.85013 16.1015 8.70359 16.0448 8.56686C15.9882 8.43013 15.9052 8.3059 15.8005 8.20125C15.6959 8.09661 15.5717 8.01359 15.4349 7.95696C15.2982 7.90033 15.1517 7.87118 15.0037 7.87118C14.8557 7.87118 14.7091 7.90033 14.5724 7.95696C14.4357 8.01359 14.3114 8.09661 14.2068 8.20125L9.8943 12.5138L3.27461 9.28969L19.6874 4.3125L14.7102 20.7253Z" fill="currentColor"/>
        </svg>
    )
    
    useEffect(() => {
        // Unwrap the params promise and extract userId
        (async () => {
            const resolvedParams = await params;
            setUserId(resolvedParams.userId);
        })();
    }, [params]);

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [error, setError] = useState("");

    const chatBoxRef = useRef(null); 

    // Perguntas com validações
    const questions = [
        {
            text: "Qual o nome do seu personagem?", name: "name",
            validate: (input) => input.trim().length > 0 || "O nome não pode ser vazio."
        },
        {
            text: "Qual a raça do seu personagem?", name: "race",
            validate: (input) => ["Humano", "Elfo", "Anão", "Meio-Elfo", "Meio-Orc", "Halfling"].includes(input)
                ? true
                : "Escolha uma das raças disponíveis.",
            options: ["Humano", "Elfo", "Anão", "Meio-Elfo", "Meio-Orc", "Halfling"]
        },
        {
            text: "Qual a classe do seu personagem?", name: "class",
            validate: (input) => ["Guerreiro", "Mago", "Ladino", "Clérigo", "Bárbaro", "Feiticeiro"].includes(input)
                ? true
                : "Escolha uma das classes disponíveis.",
            options: ["Guerreiro", "Mago", "Ladino", "Clérigo", "Bárbaro", "Feiticeiro"]
        },
        {
            text: "Qual o valor de Força do seu personagem?", name: "str",
            validate: (input) =>
                /^\d+$/.test(input) && Number(input) >= 3 && Number(input) <= 18
                    ? true
                    : "O valor deve ser um número entre 3 e 18."
        },
        {
            text: "Qual o valor de Destreza do seu personagem?", name: "dex",
            validate: (input) =>
                /^\d+$/.test(input) && Number(input) >= 3 && Number(input) <= 18
                    ? true
                    : "O valor deve ser um número entre 3 e 18."
        },
        {
            text: "Qual o valor de Constituição do seu personagem?", name: "con",
            validate: (input) =>
                /^\d+$/.test(input) && Number(input) >= 3 && Number(input) <= 18
                    ? true
                    : "O valor deve ser um número entre 3 e 18."
        },
        {
            text: "Qual o valor de Inteligência do seu personagem?", name: "int",
            validate: (input) =>
                /^\d+$/.test(input) && Number(input) >= 3 && Number(input) <= 18
                    ? true
                    : "O valor deve ser um número entre 3 e 18."
        },
        {
            text: "Qual o valor de Sabedoria do seu personagem?", name: "wis",
            validate: (input) =>
                /^\d+$/.test(input) && Number(input) >= 3 && Number(input) <= 18
                    ? true
                    : "O valor deve ser um número entre 3 e 18."
        },
        {
            text: "Qual o valor de Carisma do seu personagem?", name: "cha",
            validate: (input) =>
                /^\d+$/.test(input) && Number(input) >= 3 && Number(input) <= 18
                    ? true
                    : "O valor deve ser um número entre 3 e 18."
        }
    ];

    // Enviar mensagem
    const sendMessage = () => {
        if (!input.trim()) return;
    
        const currentQuestion = questions[currentQuestionIndex];
        const validationResult = currentQuestion.validate(input);
    
        if (validationResult !== true) {
            setError(validationResult); // Exibe erro caso a validação falhe
            return;
        }
    
        setError(""); // Limpa erros caso a validação passe
    
        const newMessages = [
            ...messages,
            { type: "bot", text: currentQuestion.text },
            { type: "user", user: input, name: currentQuestion.name }
        ];
    
        setMessages(newMessages);
        setInput("");
    
        // Avança para a próxima pergunta ou redireciona
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            // Dados do formulário
            const formData = new FormData();
            messages.forEach((message) => {
                if (message.type === "user") {
                    formData.append(message.name, message.user);
                }
            });
            formData.append(currentQuestion.name, input); // Inclui a última resposta
            formData.append("user", userId);
    
            // Envia os dados e redireciona
            (async () => {
                try {
                    const res = await fetch("/api/chars/create", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(Object.fromEntries(formData.entries())),
                    });
    
                    if (res.ok) {
                        router.push(`/char/index/${userId}`); // Redireciona após sucesso
                    } else {
                        console.log("Char creation failed");
                    }
                } catch (error) {
                    console.log("Error during creation: ", error);
                }
            })();
        }
    };
    
    
    
    

    // Preencher input ao clicar no botão
    const selectOption = (option) => {
        setInput(option);
    };

    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        // Scroll para o final da div de chat
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const getMessageName = function () {
        const inputs = document.querySelectorAll(".message.user");
        const index = inputs.length;

        return questions[index].name;
    }

    // Envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(document.getElementById("chat")); // Pega o formulário
        const data = Object.fromEntries(formData.entries());
        data.user = userId;
    
        try {
            const res = await fetch("/api/chars/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            if (res.ok) {
                router.push(`/char/index/${userId}`); // Redireciona após sucesso
            } else {
                console.log("Char creation failed");
            }
        } catch (error) {
            console.log("Error during creation: ", error);
        }
    };
    

    return (
        <div className="create-container">
            <NavBar userId={userId} />
            <Header/>
            <form onSubmit={handleSubmit} id="chat" className="gradient-box">
                <div ref={chatBoxRef} className="chat-box">
                    {/* Exibição das mensagens */}
                    <div className="messages">
                        {messages.map((message, index) => (
                            <div className={`message ${message.type}`}
                                key={index}>
                                {message.type === "bot" && <p>{message.text}</p>}
                                {message.type === "user" && (
                                    <input readOnly name={message.name} value={message.user} />
                                )}
                            </div>
                        ))}
                        {currentQuestionIndex < questions.length && (
                            <div className="message bot">{questions[currentQuestionIndex].text}</div>
                        )}
                    </div>
                {/* <button type="submit">Submit</button> */}

                </div>
            </form>
            {/* Exibição do erro */}
            {error && <div className="error">{error}</div>}

            {/* Div de sugestões */}
            {currentQuestion?.options && (
                <div id="suggestions" className="suggestions-container">
                    {currentQuestion.options.map((option, index) => (
                        <button key={index} onClick={() => selectOption(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
            {/* Campo de entrada de texto */}
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Digite sua resposta..."
                />
                <button onClick={sendMessage}><SendIcon/></button>
            </div>
        </div>
    );
}
