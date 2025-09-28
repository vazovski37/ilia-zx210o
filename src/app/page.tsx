// src/app/page.tsx
/**
 * This page was customized automatically during repository creation
 * to display the project name.
 */
import Image from "next/image";

export default function Home() {
  const projectTitle = "ilia";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <main className="flex flex-col items-center justify-center gap-8 p-10 rounded-xl shadow-2xl bg-white dark:bg-gray-800 transition-shadow">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Welcome to <span className="text-blue-600 dark:text-blue-400">{projectTitle}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
          Your Next.js project is successfully provisioned and ready for deployment! good luck little boy!! don even think twice. no doubt u gonna make it!
        </p>
        <div className="flex gap-4">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 px-6 py-3 font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            href="https://github.com/vazovski37/ilia-zx210o"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Using a placeholder SVG icon for GitHub */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.011-1.045-.017-2.049-3.336.724-4.042-1.61-4.042-1.61-.542-1.368-1.325-1.734-1.325-1.734-1.085-.741.083-.725.083-.725 1.205.084 1.838 1.236 1.838 1.236 1.069 1.835 2.809 1.305 3.493.998.108-.77.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.306.465-2.372 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.849 1.233 1.915 1.233 3.221 0 4.609-2.807 5.624-5.476 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.895-.015 3.28 0 .318.192.694.801.576 4.765-1.589 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
