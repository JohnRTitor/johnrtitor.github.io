import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      <header className="bg-indigo-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">
            Welcome to JohnRTitor&apos;s GitHub Profile
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About JohnRTitor</h2>
          <p className="text-lg">
            JohnRTitor is a passionate software developer with a keen interest in open source
            projects. Check out his GitHub repositories below:
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Repositories</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link
                href="https://github.com/JohnRTitor/nix-iso"
                className="text-indigo-600 hover:underline"
              >
                nix-iso
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/JohnRTitor/nix-conf"
                className="text-indigo-600 hover:underline"
              >
                nix-conf
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/JohnRTitor/C-Numerical-Methods"
                className="text-indigo-600 hover:underline"
              >
                C-Numerical-Methods
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/JohnRTitor/Shell-Programming-Assignments"
                className="text-indigo-600 hover:underline"
              >
                Shell-Programming examples
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tools</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link href="/tools/calculator" className="text-indigo-600 hover:underline">
                Calculator
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-800 py-4 mt-10">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} JohnRTitor
        </div>
      </footer>
    </div>
  );
}
