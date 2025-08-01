import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        Title
        <div>
          <Link
            href="https://eddhall0821.github.io/gunfire-client"
            className="underline"
          >
            Project 1: Gunfire Link
          </Link>
        </div>
        <div>
          <Link href="/about" className="underline">
            Project 2: r3f
          </Link>
        </div>
        <div>
          <Link href="https://yesmouse.vercel.app/mouse" className="underline">
            Project 3: MOUSE
          </Link>
        </div>
        <div>
          <Link href="https://yeslab.gg" className="underline">
            Project 4: YESLAB
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}
