import Link from "next/link";

export default function Header() {
    return (
                  <header className="flex p-5 border m-4 rounded-xl justify-between">
            <div>
              <h1 className="text-xl font-bold text-center
              transition hover:opacity-50">
                <Link href="/">Уроки по Next.js</Link>
              </h1>
            </div>
            <div>
              <Link href="/login">
                <h1 className="text-xl font-bold text-right
                transition hover:opacity-50">Sign In</h1>
              </Link>
            </div>
          </header>
    )
}