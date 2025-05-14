import React, { useState, useEffect } from 'react';
import { Leaf, BarChart3, Sprout, Users, Calendar, ChevronRight, Mail, Phone, MapPin, Globe, Shield, TrendingUp, ArrowRight, MessageCircle } from 'lucide-react';
import CookieConsent from 'react-cookie-consent';
import ReactWhatsapp from 'react-whatsapp';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="agriIntelConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ background: "#22C55E", color: "white", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AgriIntel Nexus</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#why-ain" className="text-gray-700 hover:text-green-600 transition-colors">Why AIN</a>
              <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">Our Impact</a>
              <a href="#story" className="text-gray-700 hover:text-green-600 transition-colors">Our Story</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </nav>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all hover:scale-105">
              Book a Demo
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/15835846/pexels-photo-15835846/free-photo-of-man-and-woman-with-cow-calf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Farmer in field with technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Farmers, Building a Greener Future
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              AI-driven technology to enhance agricultural productivity, earn carbon credits, and combat climate change.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-500 transition-all hover:scale-105 flex items-center">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full hover:bg-white/20 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Farmers Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100K</div>
              <div className="text-gray-600">Hectares Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
              <div className="text-gray-600">Yield Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200K+</div>
              <div className="text-gray-600">Carbon Credits Tracked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AIN Section */}
      <section id="why-ain" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AgriIntel Nexus?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At AIN, we combine cutting-edge technology with sustainable agricultural practices to empower farmers and help them thrive in the face of climate change.
            </p>
          </div>

          {/* CEO Section */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img
                  src="https://avatars.githubusercontent.com/u/91152752?v=4"
                  alt="CEO"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Message from our CEO</h3>
                <p className="text-gray-600 mb-4">
                  "Our mission at AgriIntel Nexus is to revolutionize agriculture through technology while ensuring sustainability and profitability for our farmers. We believe in creating a future where technology and nature work in harmony."
                </p>
                <p className="font-semibold">Jim Brian Munene- Founder & CEO</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <Globe className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Our platform leverages artificial intelligence to provide data-driven insights, helping farmers make smarter decisions and increase productivity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <Shield className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Carbon Credit Tracking</h3>
              <p className="text-gray-600">
                Track and manage carbon credits earned through sustainable farming practices, creating new revenue streams while contributing to climate action.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <TrendingUp className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Partnerships for Growth</h3>
              <p className="text-gray-600">
                Access a network of cooperatives, insurance companies, and NGOs providing support to grow your farming business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect!</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you. Whether you have questions or want to learn more, we're here to help.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-green-600 mr-3" />
                    <span>contact@agrintelnexus.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-green-600 mr-3" />
                    <span>+254 727777970</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-green-600 mr-3" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
                <div className="flex space-x-4">
                  <ReactWhatsapp
                    number="+254727777970"
                    message="Hello, I'm interested in learning more about AgriIntel Nexus."
                    className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </ReactWhatsapp>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Office Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Leaf className="h-8 w-8 text-green-500" />
                <span className="ml-2 text-xl font-bold">AgriIntel Nexus</span>
              </div>
              <p className="text-gray-400">
                Transforming agriculture through technology and sustainability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#why-ain" className="text-gray-400 hover:text-white transition-colors">Why AIN</a></li>
                <li><a href="#impact" className="text-gray-400 hover:text-white transition-colors">Our Impact</a></li>
                <li><a href="#story" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#linkedin" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#facebook" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AgriIntel Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;