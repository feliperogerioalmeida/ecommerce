import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/app/_providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/app/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

const Cart = () => {

    const { products, subtotal, total, totalDiscount } = useContext(CartContext)

    return (
        <div className="flex flex-col h-full gap-8">
            <Badge className="w-fit gap-1 text-base uppercase border-primary px-3 py-[0.375rem] border-2" variant="outline">
                <ShoppingCartIcon size={16}/>
                Carrinho
            </Badge>

            <div className="flex flex-col gap-5 h-full overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="flex flex-col h-full gap-8">
                        {products.length > 0 ? (
                        products.map((product) => (
                            <CartItem
                            key={product.id}
                            product={computeProductTotalPrice(product as any) as any}
                            />
                        ))
                        ) : (
                        <p className="text-center font-semibold">
                            Carrinho vazio. Vamos fazer compras?
                        </p>
                        )}
                    </div>
                </ScrollArea>
            </div>


            <div className="flex flex-col gap-3">
                <Separator />
                
                <div className="flex items-center justify-between text-xs">
                    <p>Subtotal</p>
                    <p>R$ {subtotal.toFixed(2)}</p>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between text-xs">
                    <p>Entrega</p>
                    <p>GRÁTIS</p>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between text-xs">
                    <p>Descontos</p>
                    <p>- R$ {totalDiscount.toFixed(2)}</p>
                </div>
                
                <Separator />

                <div className="flex items-center justify-between text-sm font-bold">
                    <p>Total</p>
                    <p>R$ {total.toFixed(2)}</p>
                </div>

                <Button className="uppercase font-bold mt-7">Finalizar Compra</Button>

            </div>
        </div>
  );

}
 
export default Cart;