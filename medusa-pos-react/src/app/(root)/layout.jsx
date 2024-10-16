"use client"

import "../styles/globals.css"
import "../styles/colors.css"
import "../styles/tailwind.css"
import { MedusaProvider, useAdminRegions } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const queryClient = new QueryClient()

const BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BASE_URL;

export const BaseUrlContext = React.createContext({BASE_URL:BASE_URL});

export default function RootLayout({ children }) {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={BASE_URL}
    >
    <BaseUrlContext.Provider value={{BASE_URL:BASE_URL}}>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
        <body>
          <div hidden id="base-url" data-base-url={BASE_URL}></div>
          {children}
        </body>
      </html>
    </BaseUrlContext.Provider>
    </MedusaProvider>
  );
}