import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../_data/products";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
          <CardHeader className="p-4 pb-2 space-y-0">
            <div className="aspect-video relative rounded-md overflow-hidden mb-3 bg-muted flex items-center justify-center">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain"
                unoptimized={product.thumbnail.startsWith('https://')}
              />
            </div>
            <CardTitle className="text-lg line-clamp-1">{product.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow p-4 pt-0">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium text-primary">${product.price.toFixed(2)}</span>
              <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-1">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1, -1)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3 mt-2">
              {product.shortDescription}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0 mt-auto">
            <Link href={`/store/${product.category}/${product.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
} 