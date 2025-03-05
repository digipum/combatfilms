"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "../_data/videos";

interface VideoGridProps {
  videos: Video[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <Card key={video.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
          <CardHeader className="p-4 pb-2 space-y-2">
            <CardTitle className="text-lg whitespace-normal mb-2">{video.title}</CardTitle>
            {video.subtitle && (
              <p className="text-sm text-muted-foreground -mt-1">{video.subtitle}</p>
            )}
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow">
            <div className="aspect-video w-full rounded-md overflow-hidden bg-muted mb-4">
              {video.videoType === 'youtube' && (
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
              {video.videoType === 'vimeo' && (
                <iframe
                  src={`https://player.vimeo.com/video/${video.videoId}`}
                  title={video.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
            
            <div className="flex flex-col gap-1 mb-2">
              <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-1 self-start">
                {video.category}
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {video.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 