// @\app\(dashboard)\[storeId]\(routes)\products\[productId]\page.tsx
import prismadb from "@/lib/prismadb";
import { ProductForm } from "./components/productForm";
export default async function ProductPage({
  params,
}: {
  params: { productId: string; storeId: string };
}) {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  }).then(product => product ? {
    ...product,
    price: product.price.toNumber()
  } : null );

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          initialData={product}
          categories={categories}
          colors={colors}
          sizes={sizes}
        />
      </div>
    </div>
  );
}
