import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Fenz AI. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <Link href="#" className="text-sm hover:text-gray-300">
              About
            </Link>
            <Link href="#tally-open=nrLkBv&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave" className="text-sm hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;