import Navbar from "./Navbar";


export default function Header() {
  return (
    <header className="fixed z-10 inset-x-0">
        <div className="flex items-center justify-center gap-x-3 bg-black h-[80px] text-white">
            <button className="bg-[#e55] rounded-2xl py-1 px-4">Announcement</button>
            <p>How we&apos;re responding to COVID-19</p>
        </div>
        <Navbar />
    </header>
  )
}
