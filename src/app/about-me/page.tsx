import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About Me',
    description: 'About me description',
    
  }
}

export default function AboutMe() {
  return <>
    <h1 className="flex font-bold text-6xl">About Me</h1>
    <br />
    Ma come seleziono il layout ? 
  </>;
}

