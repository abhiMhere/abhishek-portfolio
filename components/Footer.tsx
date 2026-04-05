import VisitorCount from "@/components/VisitorCount";

<VisitorCount />
export default function Footer() {
  return (
    <footer id="contact" className="py-10 px-6 border-t border-gray-800 text-center text-gray-400">

      <p className="mb-2">
        © {new Date().getFullYear()} Abhishek Raj 
      </p>

      <div className="flex justify-center gap-6 text-sm">
        <a href="https://github.com/abhiMhere" target="_blank" className="hover:text-white">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/abhishek-raj-surya/" target="_blank" className="hover:text-white">
          LinkedIn
        </a>
        <a href="mailto:abhisunny019@gmail.com" className="hover:text-white">
          Email
        </a>
      </div>

    </footer>
  );
}