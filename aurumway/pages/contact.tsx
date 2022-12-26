import React from "react";
import { ContactPage } from "../lib/components/ContactPage";
import { NavBar } from "../lib/components/NavBar";
import Script from "next/script";
export default function Contact() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossOrigin="anonymous"
      />
      <NavBar />
      <ContactPage />
    </>
  );
}
