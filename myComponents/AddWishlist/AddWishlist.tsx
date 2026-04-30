'use client'
import { addWishlist, removeProductWishlist } from '@/app/wishlist/wishlist.action'
import { CartContext } from '@/Context/CartAndWishlist'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { toast } from 'sonner'

export default function AddWishlist({ id, isInWishlist }: { id: string, isInWishlist: boolean }) {
    const [active, setActive] = useState(isInWishlist)
    const { wishlistItem, setWishlistItem } = useContext(CartContext)
    const router = useRouter()

async function handleWishlist() {
  try {
    if (active) {
      await removeProductWishlist(id);
      setActive(false);
      setWishlistItem(wishlistItem - 1)
    } else {
      await addWishlist(id);
      setActive(true);
      setWishlistItem(wishlistItem + 1)
    }

    router.refresh();

  } catch (error) {
    console.log(error);
    toast.error('pleas try again OR Login first Or Cheek your internet')
  }
}


    return <>
        <div onClick={handleWishlist} className={`iconCircle ${active ? 'bg-red-600' : '' }`}>
            <CiHeart />
        </div>
    </>
}
