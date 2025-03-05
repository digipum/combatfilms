import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoGrid } from "./_components/video-grid";
import { documentarySeries, documentaryFeature, documentaryShort, biography } from "./_data/videos";

export const metadata = {
  title: "Our Work | Combat Films",
  description: "Discover the storytelling projects and films created by Combat Films.",
};

export default function OurWork() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Title */}
      <div className="bg-muted py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Our Work</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mt-4">
            Compelling stories that educate, inform, and inspire audiences around the world.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="documentary-feature" className="w-full">
          {/* Tab Navigation as a Banner */}
          <div className="bg-background sticky top-[68px] z-10 border-b mb-8">
            <div className="container mx-auto py-4 px-4">
              <TabsList className="w-full flex bg-transparent h-auto p-0 justify-between gap-2">
                <TabsTrigger 
                  value="documentary-feature" 
                  className="flex-1 min-w-0 px-2 sm:px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
                  hover:bg-accent hover:text-accent-foreground
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-md text-sm sm:text-base"
                >
                  Documentary Feature
                </TabsTrigger>
                <TabsTrigger 
                  value="documentary-series" 
                  className="flex-1 min-w-0 px-2 sm:px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
                  hover:bg-accent hover:text-accent-foreground
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-md text-sm sm:text-base"
                >
                  Documentary Series
                </TabsTrigger>
                <TabsTrigger 
                  value="documentary-short" 
                  className="flex-1 min-w-0 px-2 sm:px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
                  hover:bg-accent hover:text-accent-foreground
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-md text-sm sm:text-base"
                >
                  Documentary Short
                </TabsTrigger>
                <TabsTrigger 
                  value="biography" 
                  className="flex-1 min-w-0 px-2 sm:px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
                  hover:bg-accent hover:text-accent-foreground
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-md text-sm sm:text-base"
                >
                  <span className="truncate">Biography</span>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <TabsContent value="documentary-feature" className="px-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Documentary Feature</h2>
                <p className="text-muted-foreground mt-2">
                  Full-length documentaries that provide in-depth exploration of important subjects.
                </p>
              </div>
              <VideoGrid videos={documentaryFeature} />
            </div>
          </TabsContent>
          
          <TabsContent value="documentary-series" className="px-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Documentary Series</h2>
                <p className="text-muted-foreground mt-2">
                  Multi-episode documentary series exploring complex topics in depth.
                </p>
              </div>
              <VideoGrid videos={documentarySeries} />
            </div>
          </TabsContent>
          
          <TabsContent value="documentary-short" className="px-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Documentary Short</h2>
                <p className="text-muted-foreground mt-2">
                  Concise documentaries that deliver powerful stories in a compact format.
                </p>
              </div>
              <VideoGrid videos={documentaryShort} />
            </div>
          </TabsContent>
          
          <TabsContent value="biography" className="px-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Biography</h2>
                <p className="text-muted-foreground mt-2">
                  Films focused on the lives and experiences of remarkable individuals.
                </p>
              </div>
              <VideoGrid videos={biography} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 