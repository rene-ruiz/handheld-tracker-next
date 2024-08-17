"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { AuthProvider } from "@/context/authContext";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <Navbar />
      {children}
    </AuthProvider>
  );
};

export default ClientLayout;
