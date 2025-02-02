import Image from 'next/image';
import Footer from "@/app/Footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header */}
        <header className="bg-white shadow-lg py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">CryptoWhatsApp Integration</h1>
            <nav>
              <a
                  href="#register"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-blue-50 py-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Simplify Crypto Trading with WhatsApp
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Manage your cryptocurrency transactions effortlessly through simple WhatsApp messages.
              Secure, fast, and user-friendly operations.
            </p>
            <Image
                src="/cryptocurrency_logo.svg" // Caminho para a pasta public
                alt="Crypto Integration with WhatsApp"
                width={400}
                height={400}
                className="mx-auto"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Instant Balances</h3>
              <p>Ask questions like "What is my BTC balance on Binance?" and get immediate answers.</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Quick Trades</h3>
              <p>Send messages such as "Buy 200 BRL in BTC" or "Sell 5 SOL" without opening an app.</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Secure Operations</h3>
              <p>Your API keys and operations are protected with strong security protocols.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 py-16 text-white text-center">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold mb-4">Ready to Simplify Your Crypto Journey?</h3>
            <p className="text-lg mb-6">
              Get started today and manage your crypto transactions easily and securely.
            </p>
            <a
                href="#register"
                className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Register Now
            </a>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 py-8 text-white">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <p>&copy; 2025 CryptoWhatsApp Integration. All rights reserved.</p>
            <a
                href="#register"
                className="underline text-blue-400 hover:text-blue-300"
            >
              Backoffice Access
            </a>
          </div>
          <Footer/>
        </footer>
      </div>
  );
}
