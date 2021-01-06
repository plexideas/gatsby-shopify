import React, { useState, useEffect } from 'react';
import Image from 'gatsby-image';
import { ImageGallaryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';

export function ImageGallary({ selectedVariantImageId, images }) {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  const handleClick = image => {
    setActiveImageThumbnail(image);
  };

  useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [selectedVariantImageId, setActiveImageThumbnail, images]);

  return (
    <ImageGallaryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
        {images.map(image => (
          <ImageThumbnail
            key={image.id}
            isActive={activeImageThumbnail.id === image.id}
            onClick={handleClick}
            image={image}
          />
        ))}
      </div>
    </ImageGallaryWrapper>
  );
}
