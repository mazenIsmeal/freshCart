'use client'
import { addProductToCart } from '@/app/cart/cart.action';
import { removeProductWishlist } from '@/app/wishlist/wishlist.action'
import { CartContext } from '@/Context/CartAndWishlist';
import { useContext } from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa'
import { toast } from 'sonner';

export default function AddAndRemoveItemToWishlist({id}: {id: string}) {
    console.log(id);
    const { wishlistItem, setWishlistItem } = useContext(CartContext)
    const { cartItem, setCartItem } = useContext(CartContext)
    async function handleRemove() {
        try {
            const deleteItem = await removeProductWishlist(id)
            console.log(deleteItem);
            toast.success('Success Remove')
            setWishlistItem(wishlistItem - 1)
        } catch (error) {
            toast.error('some thing wrong')
            console.log(error);
            
        }
    }
    async function addToCartItemToWishlist() {
        const add = await addProductToCart(id)
        setCartItem(cartItem +1)
        console.log(add);
        
    }
  return <>
    <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
                <button onClick={addToCartItemToWishlist} className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-green-600 text-white hover:bg-green-700">
                  <FaShoppingCart />
                  <span className="md:hidden lg:inline">Add to Cart</span>
                </button>
                <button
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50"
                  title="Remove"
                  onClick={handleRemove}
                >
                  <FaTrash />
                </button>
              </div>
  </>
}
