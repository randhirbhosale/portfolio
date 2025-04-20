export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900">
      <p>
        Built with ❤️ by Randhir. © {new Date().getFullYear()}
      </p>
      <p>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>{" "}
        |{" "}
        <a href="mailto:youremail@example.com" className="hover:underline">
          Email Me
        </a>
      </p>
    </footer>
  );
}

