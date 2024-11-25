"use client"

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { ProductWithTotalPrice } from "@/app/helpers/product";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps{
    product: Pick<
                ProductWithTotalPrice,
                "basePrice"|
                "description"|
                "discountPercentage"|
                "totalPrice"|
                "name"
            
                
        >
}


const ProductInfo = ({product: {basePrice, totalPrice, description, discountPercentage, name}}: ProductInfoProps) => {

    const [quantity, setQuantity] = useState(1)

    const handleDecreaseQuantityClick = () => {
        setQuantity((prev)=>(prev == 1 ? prev:prev -1))
    }
    const handleIncreaseQuantityClick = () => {
        setQuantity((prev)=>(prev +1))
    }

    return (
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{name}</h2>
            
            <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
                {discountPercentage > 0 &&(
                    <Badge className="px-2 py-[2px]">
                        <ArrowDownIcon size={14}/>
                        {discountPercentage}%
                    </Badge>
                )}
            </div>
            
            {discountPercentage > 0 &&(
                <p className="text-sm opacity-75"> De: <span className="line-through">R$ {Number(basePrice).toFixed(2)}</span> </p>
            )}

            <div className="flex items-center gap-2 mt-4">
                <Button size={16} variant="outline" onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon/>
                </Button>

                <span> {quantity} </span>
                
                <Button size={16} variant="outline" onClick={handleIncreaseQuantityClick}>
                    <ArrowRightIcon/>
                </Button>

            </div>

            <div className="flex flex-col gap-3 mt-8">
                <h3 className="font-bold">Descrição</h3>
                <p className="text-sm opacity-60 text-justify">{description}</p>
            </div>

            <Button className="mt-8 font-bold uppercase">Adicionar ao carrinho</Button>

            <div className="bg-accent flex items-center px-5 py-2 justify-between mt-5 rounded-lg">
                <div className="flex items-center gap-2">
                    <TruckIcon/>

                    <div className="flex flex-col">
                        <p className="text-xs">Entrega via <span className="font-bold">OrbiPacket®</span></p>
                        <p className=" text-xs text-[#8162FF]">Envio para <span className="font-bold">todo Brasil</span></p>
                    </div>
                </div>

                <p className="text-xs font-bold">Frete grátis </p>
            </div>

        </div>
      );
}
 
export default ProductInfo;