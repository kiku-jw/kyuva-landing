import { Github } from "lucide-react"
import { withBasePath } from "@/lib/site"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#888] text-sm">© 2026 Mykyta Dudnichenko</p>

          <div className="flex items-center gap-6">
            <a href={withBasePath("/product-demo-script-template/")} className="text-[#888] hover:text-white text-sm transition-colors">
              Script template
            </a>
            <a href={withBasePath("/privacy/")} className="text-[#888] hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href={withBasePath("/support/")} className="text-[#888] hover:text-white text-sm transition-colors">
              Support
            </a>
            <a
              href="https://github.com/kiku-jw/kyuva"
              className="text-[#888] hover:text-white transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
            </a>
            <a href="https://kikuai.dev/" className="text-[#888] hover:text-white text-sm transition-colors">
              More KikuAI projects
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
