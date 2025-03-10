"use client";

import { Button } from "@/components/ui/button";

interface StreamingOptionsProps {
  documentaryId: string;
}

interface StreamingLink {
  vimeo: string;
  amazon?: string;
}

// Streaming links for different documentaries
const streamingLinks: Record<string, StreamingLink> = {
  'doc-unfortunate-brothers': {
    vimeo: 'https://vimeo.com/ondemand/unfortunatebrothers',
    amazon: 'https://www.amazon.com/Unfortunate-Brothers-Koreas-Reunification-Dilemma/dp/B08K3K8PT1'
  },
  'doc-global-car': {
    vimeo: 'https://vimeo.com/ondemand/globalcar',
    // No Amazon Prime link for Global Car
  },
  'doc-launch-pads': {
    vimeo: 'https://vimeo.com/ondemand/launchpads',
    amazon: 'https://www.amazon.com/dp/B08K3K8PT3' // placeholder, replace with actual link
  },
  'doc-masses-to-masses': {
    vimeo: 'https://vimeo.com/ondemand/massestomasses',
    amazon: 'https://www.amazon.com/dp/B08K3K8PT4' // placeholder, replace with actual link
  },
  'doc-fog-friction': {
    vimeo: 'https://vimeo.com/ondemand/fogandfriction',
    amazon: 'https://www.amazon.com/dp/B08K3K8PT5' // placeholder, replace with actual link
  },
  // Add more documentaries as needed
};

// Default fallback if a documentary ID isn't found
const defaultStreamingLink: StreamingLink = {
  vimeo: 'https://vimeo.com/ondemand/unfortunatebrothers',
  amazon: 'https://www.amazon.com/Unfortunate-Brothers-Koreas-Reunification-Dilemma/dp/B08K3K8PT1'
};

export function StreamingOptions({ documentaryId }: StreamingOptionsProps) {
  // Get the links for this documentary, or fall back to the default
  const links = streamingLinks[documentaryId] || defaultStreamingLink;
  
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-3">Also available on:</h3>
      <div className="flex gap-3">
        <Button 
          variant="default" 
          className={links.amazon ? "flex-1 bg-[#1ab7ea] hover:bg-[#0d9dd1] text-white hover:text-white border-[#1ab7ea]" : "w-full bg-[#1ab7ea] hover:bg-[#0d9dd1] text-white hover:text-white border-[#1ab7ea]"}
          onClick={() => window.open(links.vimeo, '_blank')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
            <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797z"/>
          </svg>
          Watch on Vimeo
        </Button>
        {links.amazon && (
          <Button 
            variant="default" 
            className="flex-1 bg-[#00A8E1] hover:bg-[#008CB9] text-white hover:text-white border-[#00A8E1]"
            onClick={() => window.open(links.amazon, '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M21.4 13.32C20.8115 13.7389 18.9614 14.6172 18.9614 14.6172C18.4057 14.9356 18.1782 15.1909 18.1782 15.6043C18.1782 16.095 18.5747 16.3683 19.0923 16.3683L21.583 16.3668C21.721 16.3668 21.8325 16.4783 21.8325 16.6163V17.7996C21.8325 17.9375 21.721 18.049 21.583 18.049H18.9158C17.7163 18.049 16.7682 17.2123 16.7682 15.8286C16.7682 14.5426 17.5515 13.8434 18.4322 13.3656L20.5374 12.2476C21.0908 11.9521 21.291 11.6954 21.291 11.3041C21.291 10.8133 20.8945 10.5401 20.377 10.5401H17.6838C17.5459 10.5401 17.4343 10.4286 17.4343 10.2906V9.10717C17.4343 8.96923 17.5459 8.8577 17.6838 8.8577H20.377C21.8882 8.8577 22.701 9.78552 22.701 11.1234C22.7009 12.4063 22.0359 12.8753 21.4 13.32ZM15.9271 13.32C15.3386 13.7389 13.4885 14.6172 13.4885 14.6172C12.9329 14.9356 12.7054 15.1909 12.7054 15.6043C12.7054 16.095 13.1019 16.3683 13.6195 16.3683L16.1102 16.3668C16.2481 16.3668 16.3596 16.4783 16.3596 16.6163V17.7996C16.3596 17.9375 16.2481 18.049 16.1102 18.049H13.4429C12.2434 18.049 11.2953 17.2123 11.2953 15.8286C11.2953 14.5426 12.0786 13.8434 12.9593 13.3656L15.0646 12.2476C15.6179 11.9521 15.8181 11.6954 15.8181 11.3041C15.8181 10.8133 15.4216 10.5401 14.9041 10.5401H12.2109C12.073 10.5401 11.9615 10.4286 11.9615 10.2906V9.10717C11.9615 8.96923 12.073 8.8577 12.2109 8.8577H14.9041C16.4153 8.8577 17.2281 9.78552 17.2281 11.1234C17.2281 12.4063 16.5631 12.8753 15.9271 13.32ZM8.11484 18.049H6.83805C6.70011 18.049 6.58857 17.9375 6.58857 17.7996V7.26621C6.58857 7.12827 6.70011 7.01674 6.83805 7.01674H8.11484C8.25278 7.01674 8.36431 7.12827 8.36431 7.26621V17.7996C8.36431 17.9375 8.25278 18.049 8.11484 18.049ZM4.32645 7.01665H3.22C3.08206 7.01665 2.97052 7.12818 2.97052 7.26612V13.1176L0.2317 7.13275C0.191237 7.06097 0.11656 7.01664 0.0358272 7.01664H0.01C0.00446408 7.01664 0 7.01681 0 7.01681H0C0 7.01681 0 7.03015 0 7.03015V17.7996C0 17.9375 0.11153 18.049 0.24947 18.049H1.35607C1.49401 18.049 1.60554 17.9375 1.60554 17.7996V11.9537L4.34422 17.9329C4.38469 18.0046 4.45937 18.0489 4.5401 18.0489H4.57607C4.71401 18.0489 4.82554 17.9375 4.82554 17.7996V7.26613C4.82555 7.12819 4.71402 7.01665 4.57608 7.01665H4.32645Z" transform="translate(1.085 -1)"/>
            </svg>
            Watch on Prime
          </Button>
        )}
      </div>
    </div>
  );
} 