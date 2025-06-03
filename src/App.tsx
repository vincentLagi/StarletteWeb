import { Download } from "lucide-react"
import "./App.css"


interface Feature {
  title: string
  description: string
}

function App() {
  const features: Feature[] = [
    {
      title: "PUZZLES",
      description: "Challenge yourself with programming puzzle",
    },
    {
      title: "PIXEL GRAFIC",
      description: "Immerse yourself in hand-crafted pixel art visuals and animations",
    },
    {
      title: "STORY",
      description: "Uncover the mysteries of the game through an engaging narrative adventure",
    },
  ]
  const handleDownload = () => {
    const fileUrl = "/Starlette_exe/StarletteGame.zip" 
    const fileName = "Starlette_Data.zip"

    const link = document.createElement("a")
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="fixed inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <img className="absolute inset-0 bg-purple-500 rounded-md pixel-corners" src={`Logo.jpg`} />

          </div>
          <h1 className="text-xl font-bold tracking-wider pixel-text">Starlette</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#features" className="hover:text-purple-400 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#download" className="hover:text-purple-400 transition-colors">
                Download
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-6 max-w-4xl">
          <div className="relative w-full max-w-2xl mx-auto h-24 md:h-32">
            <h1 className="text-4xl md:text-6xl font-bold pixel-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">
              Starlette Game
            </h1>
            <p className="text-lg md:text-xl mt-2 text-purple-300 pixel-text">SOLVE THE MYSTERIES OF THE GAME</p>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Embark on an epic journey through the cosmos in this mind-bending pixel puzzle adventure. Navigate through
            challenging levels, solve intricate puzzles, and discover the secrets of space.
          </p>

          <div className="relative w-full max-w-4xl aspect-video mx-auto rounded-lg overflow-hidden border-4 border-purple-900 pixel-corners">
            <img
              src={"MainMenuGuide.png"}
              alt="Game Screenshot"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div id="download" className="pt-8">
            <div className="flex justify-center">
              <button onClick={handleDownload} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-md text-lg font-bold flex items-center gap-2 pixel-corners border-2 border-purple-400 h-auto transition-all duration-200">
                <Download className="w-5 h-5" />
                Download Game
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Features section */}
      <section id="features" className="relative z-10 py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 pixel-text text-purple-300">GAME FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900/60 p-6 rounded-lg border border-purple-900 pixel-corners">
              <h3 className="text-xl font-bold mb-3 text-purple-400 pixel-text">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots section */}
      <section id="screenshots" className="relative z-10 py-20 px-4 bg-gray-900/30">
        <h2 className="text-3xl font-bold text-center mb-12 pixel-text text-purple-300">SCREENSHOTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-video relative rounded-lg overflow-hidden border-2 border-purple-900 pixel-corners"
            >
              <img
                src={`SS${i + 1}.jpg`}
                alt={`Game Screenshot ${i + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold pixel-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">
            READY TO EXPLORE THE COSMOS?
          </h2>
          <p className="text-lg text-gray-300">Download now and begin your puzzle adventure through the stars!</p>
          <div className="flex justify-center">
            <button onClick={handleDownload} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-md text-lg font-bold flex items-center gap-2 pixel-corners border-2 border-purple-400 h-auto transition-all duration-200">
              <Download className="w-5 h-5" />
              Download Game
            </button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© {new Date().getFullYear()} Starlette. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
