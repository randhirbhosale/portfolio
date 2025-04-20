import { FileDown } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Get a PDF version of my latest resume.
      </p>
      <div className="flex justify-center gap-4">
        {/* Download Resume Button */}
        <a
          href="/RandhirResume.pdf"
          download
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
        >
          <FileDown className="mr-2" />
          Download Resume
        </a>
        
        {/* View Online Button */}
        <a
          href="/RandhirResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black rounded-full transition"
        >
          View Online
        </a>
      </div>
    </section>
  );
}

