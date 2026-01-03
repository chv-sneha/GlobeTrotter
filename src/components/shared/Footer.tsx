export function Footer() {
  return (
    <footer className="bg-gray-50 py-16 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-yellow-800 rounded-3xl p-12 shadow-2xl text-white">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-display">GlobeTrotter</h3>
              <p className="text-yellow-100">Empowering personalized travel planning for adventurers worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-display">Features</h4>
              <ul className="space-y-2 text-yellow-100">
                <li>Trip Planning</li>
                <li>Budget Tracking</li>
                <li>Calendar View</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-display">Support</h4>
              <ul className="space-y-2 text-yellow-100">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Travel Tips</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-display">Connect</h4>
              <ul className="space-y-2 text-yellow-100">
                <li>Newsletter</li>
                <li>Social Media</li>
                <li>Travel Blog</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-yellow-700 mt-8 pt-8 text-center text-yellow-100">
            <p>&copy; 2024 GlobeTrotter. Made with ❤️ for travelers.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}