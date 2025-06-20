"use client"
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'dotenv/config'

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Header/>
      <BlogList/>
      <Footer/>
    </>
  );
}
