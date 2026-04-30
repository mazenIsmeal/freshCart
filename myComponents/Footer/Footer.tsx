// ================= FOOTER =================
export default function Footer() {
  return (
    <footer className="bg-[#0B1C2C] text-white mt-10">
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-6 bg-green-100 text-black">
        <div>🚚 Free Shipping<br/><span className="text-sm">On orders over 500 EGP</span></div>
        <div>↩️ Easy Returns<br/><span className="text-sm">14-day return policy</span></div>
        <div>🔒 Secure Payment<br/><span className="text-sm">100% secure checkout</span></div>
        <div>🎧 24/7 Support<br/><span className="text-sm">Contact anytime</span></div>
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-6 py-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-green-500">FreshCart</h2>
          <p className="text-gray-400 mt-3 text-sm">
            FreshCart is your one-stop destination for quality products.
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <p>📞 +1 (800) 123-4567</p>
            <p>✉️ support@freshcart.com</p>
            <p>📍 123 Commerce Street, NY</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>All Products</li>
            <li>Categories</li>
            <li>Brands</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Account</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>My Account</li>
            <li>Orders</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Returns</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} FreshCart. All rights reserved.
      </div>
    </footer>
  );
}