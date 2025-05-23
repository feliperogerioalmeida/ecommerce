"use client";

import { Button } from "@/app/_components/ui/button";
import DiscountBadge from "@/app/_components/ui/discount-badge";
import { CartContext } from "@/app/_providers/cart";
import { ProductWithTotalPrice } from "@/app/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";
import WishListButton from "./wishlist-button";
import { WishList } from "@prisma/client";

interface ProductWithTotalPriceAndWishLists extends ProductWithTotalPrice {
  wishLists: WishList[];
}

interface ProductInfoProps {
  product: ProductWithTotalPriceAndWishLists;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev == 1 ? prev : prev - 1));
  };
  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col px-5 lg:w-[40%] lg:rounded-lg lg:bg-accent lg:p-10">
      <h2 className="text-lg lg:text-2xl">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold lg:text-3xl">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge className="lg:text-base">
            {product.discountPercentage}
          </DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm opacity-75 lg:text-base">
          De:{" "}
          <span className="line-through">
            R$ {Number(product.basePrice).toFixed(2)}
          </span>
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span> {quantity} </span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        <WishListButton productId={product.id} wishLists={product.wishLists} />

        <Button
          className="mt-8 font-bold uppercase"
          onClick={handleAddToCartClick}
        >
          Adicionar ao carrinho
        </Button>

        <div className="flex items-center justify-between rounded-lg bg-accent px-5 py-2 lg:bg-[#2A2A2A]">
          <div className="flex items-center gap-2">
            <TruckIcon />

            <div className="flex flex-col">
              <p className="text-xs">
                Entrega via <span className="font-bold">NexusPacket®</span>
              </p>
              <p className="text-xs text-[#2D9FC2]">
                Envio para <span className="font-bold">todo Brasil</span>
              </p>
            </div>
          </div>

          <p className="text-xs font-bold">Frete grátis </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
