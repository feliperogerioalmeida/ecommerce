import { PercentIcon } from "lucide-react";
import ProductItem from "../../_components/ui/product-item";
import { db } from "../../_lib/prisma";
import { computeProductTotalPrice } from "../../helpers/product";
import { Badge } from "../../_components/ui/badge";

const DealsPage = async () => {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge variant="heading">
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              ...product,
              totalPrice: computeProductTotalPrice(product),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
