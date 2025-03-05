import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { documentaries, books, documents, type Product } from "../../_data/products";
import { PayPalCheckout } from "./paypal-checkout";
import { StreamingOptions } from "./streaming-options";

interface ProductDetailPageProps {
  params: {
    category: string;
    id: string;
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Get the product based on category and id
  const { category, id } = params;
  
  let product: Product | undefined;

  switch (category) {
    case "documentaries":
      product = documentaries.find((doc) => doc.id === id);
      break;
    case "books":
      product = books.find((book) => book.id === id);
      break;
    case "documents":
      product = documents.find((doc) => doc.id === id);
      break;
    default:
      break;
  }

  // If product not found, return 404
  if (!product) {
    notFound();
  }

  // Check if the product is a physical DVD (currently only documentaries)
  const isPhysicalDVD = product.category === 'documentaries';
  
  // Check if it's the "Unfortunate Brothers" documentary (id: 'doc-1')
  const isUnfortunateBrothers = product.id === 'doc-1';

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <Link href="/store" className="text-primary hover:underline inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Store
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-md bg-muted flex items-center justify-center">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain"
            priority
            unoptimized={product.thumbnail.startsWith('https://')}
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              {isPhysicalDVD && (
                <span className="inline-block bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300 rounded-full px-3 py-1 text-sm">
                  Physical DVD
                </span>
              )}
              {isUnfortunateBrothers && (
                <span className="inline-block bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-300 rounded-full px-3 py-1 text-sm">
                  Digital Streaming
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-2xl font-semibold text-primary">${product.price.toFixed(2)}</p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-muted-foreground">{product.fullDescription}</p>
          </div>

          <div className="pt-6">
            {isUnfortunateBrothers && (
              <StreamingOptions />
            )}
            
            {isPhysicalDVD ? (
              <PayPalCheckout product={product} />
            ) : (
              <Button size="lg" className="w-full sm:w-auto px-8">
                Purchase Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 