import Categories from "./components/categories";
import { db } from "../_lib/prisma";
import ProductList from "./components/product-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";


export default async function Home() {
  const deals = await db.product.findMany({
    where:{
      discountPercentage:{
        gt: 0
      },
    },
  }) 

  const keyboards = await db.product.findMany({
    where: {
      category:{
        slug : "keyboards"
      }
    }
  })
 
  return (
    <div>
     <PromoBanner
        src= "/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
     />

      <div className="mt-8 px-5">
        <Categories/>
      </div>

      <div className="mt-8">
        <SectionTitle> ofertas </SectionTitle>

        <ProductList products={deals}/>
      </div>

      <PromoBanner
        src= "/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
     />

      <div className="mt-8">
        <SectionTitle> teclados </SectionTitle>

        <ProductList products={keyboards}/>
      </div>

    </div>
  );
}
