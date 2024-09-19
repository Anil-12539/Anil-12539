import Image from 'next/image';
import { useEffect, useState } from 'react';

function OurServices() {
  const [serviceImages, setServiceImages] = useState<string[]>([]);
  const galleryImages = [
    '/Serviceimages/gallary1.jpg',
    '/Serviceimages/gallary2.jpg',
    '/Serviceimages/gallary3.jpg',
  ];

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/getImages');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const imagePaths = await response.json();
        setServiceImages(imagePaths);
        console.log('Fetched service images:', imagePaths);
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
          {serviceImages.map((src, index) => (
            <div key={index} className="service-image-container" style={{ border: '1px solid #ccc', padding: '5px' }}>
              <Image 
                src={src}
                alt={`Service ${index + 1}`}
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="my-12">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              layout="responsive"
              className="object-cover rounded-lg"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurServices;