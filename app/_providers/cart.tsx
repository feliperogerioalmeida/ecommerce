"use client"


import { createContext, ReactNode, useState } from "react";
import { ProductWithTotalPrice } from "../helpers/product";

export interface CartProduct extends ProductWithTotalPrice {
    quantity: number
}

interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
    cartBasePrice: number;
    cartTotalDiscount: number;
    addProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    addProductToCart: () =>{}
})

const CartProvider = ({children} : {children : ReactNode}) => {

    const [products, setProducts] = useState<CartProduct[]>([])

    const addProductToCart = (product: CartProduct) => {

        // se o produto já estiver no carrinho, apenas aumente sua quantidade
        const productsIsAlreadyOnCart = products.some(
            (cartProduct) => cartProduct.id == product.id
        );

        if (productsIsAlreadyOnCart) {
            setProducts((prev) => 
            prev.map((cartProduct) => {
                if (cartProduct.id == product.id) {
                    return{
                        ...cartProduct,
                        quantity: cartProduct.quantity + 1
                    };
                }

                return cartProduct;
            }),
        );

        return;

        }

        // se não, adicione o produto a lista
        setProducts((prev) => [...prev, product])
    }

    return (  
        <CartContext.Provider 
            value={{
                products,
                addProductToCart,
                cartTotalPrice: 0,
                cartBasePrice: 0,
                cartTotalDiscount: 0
            }} >
            {children}
        </CartContext.Provider>
    );
}
 
export default CartProvider;