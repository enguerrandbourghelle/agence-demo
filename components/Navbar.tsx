export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <span className="font-bold text-xl text-gray-900">Agence Web</span>
      <a href="#contact" className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
        Me contacter
      </a>
    </nav>
  );
}