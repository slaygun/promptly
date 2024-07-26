import { Navbar } from "@/components/Navbar";
import Provider from "@/components/Provider";
import "@/styles/global.css";

export const metadata = {
  title: "Promptly",
  description: "Discover and Share AI Prompts",
  icons: [{ rel: "icon", url: "/assets/images/logo.png" }],
};
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
