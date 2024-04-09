import { CartProduct } from "@/interfaces";
import { create } from "zustand";


interface State {
    cart: CartProduct[];

    //addProductToCart
    //updateProductQuantity
    //removeProductFromCart
}

export const useCartStore = create<State>()(
    (set) => ({
        cart: []
    })
)