import Image from 'next/image'
import InstagramButton from './components/InstagramButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#32125C] text-white flex flex-col justify-center items-center gap-12 px-4">

      {/* Hero Section */}
        <div className="flex flex-col items-center gap-2">
          <Image
            className="w-16 h-16"
            src="/majeedr.svg"
            alt="Majeedr Logo"
            width={64}
            height={64}
          />
          <span className="font-semibold text-xl">Majeedr</span>
        </div>

        <div className="flex justify-center items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            🚧 🏗️ 🔨<br />
            We're currently
              <span className="block text-gradient">Under Construction</span>
            </h1>
            {/* Contact Expert Button */}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-300 mb-4">In the meantime, follow us on Instagram</p>
          <InstagramButton />
        </div>
      </main>


  )
}
