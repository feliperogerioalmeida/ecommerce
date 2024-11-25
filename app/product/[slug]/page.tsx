import { db } from "@/app/_lib/prisma";
import ProductImages from "./components/product-images";

interface ProductDetailsPageProps{
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({params: {slug}, } : ProductDetailsPageProps) => {
    const product = await db.product.findFirst({
        where: {
            slug:slug
        }
    })

    if (!product) {
        return null
    }

    return (  

        <div>
            <ProductImages imageUrls={product.imageUrls} name={product.name}/>
        </div>
        
    );
}
 
export default ProductDetailsPage;