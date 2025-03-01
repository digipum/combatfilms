import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductGrid } from "./_components/product-grid";
import { documentaries, books, documents } from "./_data/products";

export default function StorePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Title */}
      <div className="bg-muted py-8 mb-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">Combat Films Store</h1>
        </div>
      </div>
      
      <div className="container mx-auto pb-16">
        <Tabs defaultValue="documentaries" className="w-full">
          {/* Tab Navigation as a Banner */}
          <div className="bg-background sticky top-[68px] z-10 border-b mb-8">
            <div className="container mx-auto py-4">
              <TabsList className="w-full justify-start gap-4 bg-transparent h-auto p-0">
                <TabsTrigger 
                  value="documentaries" 
                  className="px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
                  hover:bg-accent hover:text-accent-foreground
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-md"
                >
                  Documentaries
                </TabsTrigger>
                <TabsTrigger 
                  value="books" 
                  className="px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
                  hover:bg-accent hover:text-accent-foreground
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-md"
                >
                  Books
                </TabsTrigger>
                <TabsTrigger 
                  value="documents" 
                  className="px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
                  hover:bg-accent hover:text-accent-foreground
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-md"
                >
                  Document Archive
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <TabsContent value="documentaries">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Documentaries</h2>
                <p className="text-muted-foreground">
                  Explore our collection of combat documentaries that provide insight into historical conflicts.
                </p>
              </div>
              <ProductGrid products={documentaries} />
            </div>
          </TabsContent>
          
          <TabsContent value="books">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Books</h2>
              <p className="text-muted-foreground">
                Discover our selection of books covering various aspects of military history and combat.
              </p>
              <ProductGrid products={books} />
            </div>
          </TabsContent>
          
          <TabsContent value="documents">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Document Archive</h2>
              <p className="text-muted-foreground">
                Access our archive of historical documents related to military operations and conflicts.
              </p>
              <ProductGrid products={documents} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 