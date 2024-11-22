import localFont from "next/font/local";
import "../layout.scss";

export const metadata = {
  title: "Tavern Talk",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div class="frame">
          {children}
        </div>
      </body>
    </html>
  );
}
