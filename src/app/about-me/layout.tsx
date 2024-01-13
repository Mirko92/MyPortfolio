import { TestComponent } from "@/components/TestComponent";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}
    <h1 className="text-9xl">About layout</h1>
    <TestComponent />
  </>
}