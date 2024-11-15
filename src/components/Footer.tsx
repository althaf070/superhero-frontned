import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-[#3762C6] p-4">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-100">
            © {new Date().getFullYear()} JusticeBridge. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="#" className="text-slate-200 hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="#" className="text-slate-200 hover:text-primary">
              Terms
            </Link>
            <Link to="#" className="text-slate-200 hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}