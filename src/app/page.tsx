import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0121]">
      <Header />

      {/* Hero Image */}
      <div className="relative">
        <Image
          src="/Hero Stack.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20 text-center">
            <div className="inline-flex items-center bg-purple-900/30 rounded-full px-4 py-1 mb-8">
              <span className="text-purple-200 text-sm">
                We just raised $20M in Series B.
              </span>
              <Button variant="link" className="text-purple-400 text-sm">
                Learn more
              </Button>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Modern analytics
              <br />
              <span className="text-purple-400">for the modern world</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Download the app
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-gray-700"
              >
                Talk to an expert
              </Button>
            </div>
          </section>
        </div>

        {/* Dashboard Preview */}
        <section className="container mx-auto px-4 py-20 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl" />
            <Image
              src="/Image Wrapper.png"
              alt="Analytics Dashboard"
              width={1200}
              height={700}
              className="relative"
            />
          </div>
        </section>
      </div>

      {/* Trusted By Section */}
      <section className="container mx-auto px-20 py-20 text-center">
        <p className="text-gray-400 mb-8">
          Trusted by teams at over <b>1,000</b> of the world's leading organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center opacity-70">
          {[
            { name: "Dell", logo: "/logo/Dell.png" },
            { name: "Zendesk", logo: "/logo/Zendesk.png" },
            { name: "Rakuten", logo: "/logo/Rakuten.png" },
            { name: "Pacific Funds", logo: "/logo/Pacific Funds.png" },
            { name: "NCR", logo: "/logo/NCR.png" },
            { name: "Lattice", logo: "/logo/Lattice.png" },
            { name: "TED", logo: "/logo/TED.png" },
          ].map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={40}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-20 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Features that
            <br />
            work for your
            <br />
            future.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out our amazing features and experience the power of Vaultflow
            for yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 rounded-xl p-12 border border-gray-800">
            <div className="w-12 h-12 bg-purple-600 rounded-lg mb-6 flex items-center justify-center">
              <Image
                src="/Icon Image.png"
                alt="Analytics Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Analytics Dashboard
            </h3>
            <p className="text-gray-400 mb-4">
              Our Analytics Dashboard provides a clear and intuitive interface
              for you to easily analyze your data. From customizable graphs to
              real-time data updates, our dashboard offers everything you need
              to gain valuable insights.
            </p>
            <Button variant="link" className="text-purple-400 p-0">
              View dashboard
            </Button>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-12 border border-gray-800">
            <div className="w-12 h-12 bg-purple-600 rounded-lg mb-6 flex items-center justify-center">
              <Image
                src="/Icon Image (1).png"
                alt="Tokens Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Digital Credit Tokens
            </h3>
            <p className="text-gray-400 mb-4">
              Reward your customers and incentivize engagement with our
              innovative digital credit tokens. Our tokens can be customized to
              match your branding, and are a flexible and scalable way to drive
              customer loyalty and encourage repeat business.
            </p>
            <Button variant="link" className="text-purple-400 p-0">
              View tokens
            </Button>
          </div>
        </div>

        {/* Code Collaboration Section */}
        <div className="w-full bg-gray-900/50 rounded-xl p-12 border border-gray-800 flex flex-col md:flex-row mt-8">
          <div className="flex-1 mb-6 md:mb-0">
            <div className="w-12 h-12 bg-purple-600 rounded-lg mb-6 flex items-center justify-center">
              <Image
                src="/Icon Image (2).png"
                alt="Collaboration Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Code Collaboration
            </h3>
            <p className="text-gray-400 mb-4">
              Our advanced code synchronization technology ensures that your
              data is always up-to-date and accurate, no matter where it's
              coming from. Whether you're integrating data from multiple sources
              or working with a team of developers, our synchronization
              technology makes it easy to collaborate and ensure that your data
              is consistent and reliable.
            </p>
            <Button variant="link" className="text-purple-400 p-0">
              View code collaboration
            </Button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/Image.png"
              alt="Collaboration Icon"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Powerful Analytics Section */}
        <div className="w-full bg-gray-900/50 rounded-xl p-12 border border-gray-800 mt-8">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">
            Our powerful analytics
            <br />
            provides invaluable insights.
          </h3>
          <p className="text-gray-400 mb-6 text-center">
            Unlock the power of data with our cutting-edge analytics product.
            Get instant insights with our user-friendly Analytics Dashboard, and
            take advantage of our innovative digital credit tokens to reward
            your customers and incentivize engagement.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Download the app
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
