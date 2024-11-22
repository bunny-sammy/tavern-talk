import localFont from "next/font/local";
import "../layout.scss";
import client from "/lib/mongodb";

export const metadata = {
  title: "Tavern Talk",
  description: "",
};

export default function RootLayout({ children }) {
  try {
    client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
  } catch (e) {
    console.error(e);
  }

  return (
    <html lang="pt-BR">
      <body>
        <div className="frame">
          {children}
        </div>
      </body>
    </html>
  );
}
