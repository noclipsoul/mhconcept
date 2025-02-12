import React from 'react';

interface LocationProps {
  Location: string; // Google Maps embed URL
}

export function Location({ data }: { readonly data: LocationProps }) {
  const { Location } = data;
  

  // Validate if the URL is a Google Maps embed link
  const isValidEmbedUrl = (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname === "www.google.com" && urlObj.pathname === "/maps/embed";
    } catch (error) {
      console.error("Invalid URL provided", error);
      return false;
    }
  };

  if (!isValidEmbedUrl(Location)) {
    return <div>Invalid Google Maps URL provided.</div>;
  }

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={Location}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
