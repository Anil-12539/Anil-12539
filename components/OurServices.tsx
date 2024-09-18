import Image from 'next/image';
import { useEffect, useState } from 'react';

function OurServices() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/getImages');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const imagePaths = await response.json();
        setImages(imagePaths);
        console.log('Fetched images:', imagePaths);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div>
      <section className="our-services" style={{ margin: '20px 0' }}>
        <h2>Our Services</h2>
        <div className="service-images-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {images.map((src, index) => (
            <div key={index} className="service-image-container" style={{ border: '1px solid #ccc', padding: '5px' }}>
              <Image 
                src={src}
                alt={`Service ${index + 1}`}
                width={200}
                height={200}
                layout="responsive"
                onError={(e) => {
                  console.error(`Error loading image: ${src}`);
                  // You can set a placeholder image here if needed
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurServices;