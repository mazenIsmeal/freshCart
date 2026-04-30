"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Menu, X, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";
import { CartContext } from "@/Context/CartAndWishlist";
import { signOut } from "next-auth/react";

// ================= NAVBAR =================
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data, status } = useSession()
  console.log(data, 'navbar');

  const { cartItem, setCartItem } = useContext(CartContext)
  const { wishlistItem, setWishlistItem } = useContext(CartContext)

  async function handleSignout() {
    await signOut({
      callbackUrl: "/login",
    });
  }

  return (
    <header className="w-full border-b ">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-gray-100 text-sm">
        <div className="flex gap-6">
          <span>🚚 Free Shipping on Orders 500 EGP</span>
          <span>🎁 New Arrivals Daily</span>
        </div>
        <div className="flex gap-6 items-center">
          <span>📞 +1 (800) 123-4567</span>
          <span>✉️ support@freshcart.com</span>
          <div className="flex gap-3">
            {status === 'unauthenticated' && <>
              <Link href="/login">Sign In</Link>
              <Link href="/register">Sign Up</Link>
            </>}
            {status === 'authenticated' && <>
              <Link href='/profile'>{data.user?.name}</Link>
              <div onClick={handleSignout} className="cursor-pointer">Sign Out</div>
            </>}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4 sticky bg-white top-0 z-40">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <Link href="/" className="text-2xl font-bold text-green-600">
            FreshCart
          </Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="w-full flex border rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="bg-green-600 text-white px-4">🔍</button>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Shop</Link>
          <Link href="/category">category</Link>
          <Link href="/brands">Brands</Link>
          {status === 'authenticated' ? <Link href="/allorders">Orders</Link> : ''}
          
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          {/* <div className="flex items-center gap-2 text-sm">
            <Headphones size={18} />
            <span>Support 24/7</span>
          </div> */}
          {status === 'authenticated' ? <>
          <Link href='/wishlist' className="relative">
            <Heart className="cursor-pointer" />
            {wishlistItem !== 0 && <div className="bg-red-600 size-6 rounded-full text-center text-white" style={{ position: 'absolute', top: '-15px', right: '-15px' }}>{wishlistItem}</div>
            }
          </Link>
          <Link href='/cart' className="relative">
            <ShoppingCart className="cursor-pointer" />
            {cartItem !== 0 && <div className="bg-green-600 size-6 rounded-full text-center text-white" style={{ position: 'absolute', top: '-15px', right: '-15px' }}>{cartItem}</div>
            }
          </Link>
          
          </> : ''}
          
          {status === 'authenticated' ? <>
            <Link href='/profile' className="flex items-center gap-2.5 cursor-pointer">
              <span className="text-lg capitalize">{data.user?.name}</span>
              <FaRegUserCircle className="text-lg hover:text-green-600" />
            </Link>
          </> : <>
            <Button className="bg-green-600">Sign In</Button>
          </>}

        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="w-80 bg-white h-full p-5 space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-green-600">FreshCart</h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* Search */}
            <div className="flex border rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 outline-none"
              />
              <button className="bg-green-600 text-white px-3">🔍</button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/products">Shop</Link>
              <Link href="/category">category</Link>
              <Link href="/brands">Brands</Link>
              {status === 'authenticated' ? <Link href="/allorders">Orders</Link> : ''}
            </div>

            <hr />
            {status === 'authenticated' ? <>
            <div className="flex flex-col gap-4">
              <Link href='/wishlist' className="flex items-center gap-3">
                <Heart /> Wishlist
              </Link>
              <Link href='/cart' className="flex items-center gap-3">
                <ShoppingCart /> Cart
              </Link>
            </div>

            <hr />

            {/* Auth */}
            
            </> : ''}
            {/* Wishlist & Cart */}
            
            <div className="flex gap-3">
              {status !== 'authenticated' ? 
              <Button className="flex-1 bg-green-600">
                <Link href='/login'>Sign In</Link>
              </Button> : 

                <Button onClick={handleSignout} variant="outline" className="flex-1">
                Sign Out
              </Button>
            }
              
              
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


