"use client";
import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";
import ProviderTheme from "@providers/ProviderTheme";

const RootLayout = ({ children }) => (
  <html lang="en">
    <body
    // suppressHydrationWarning={true}
    >
       <Provider>
      <ProviderTheme>
          <main className="sm:mx-4 lg:mx-8">
              <Nav />
            <div className="app">
              {children}
            </div>
              <Footer />
          </main>
      </ProviderTheme>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
