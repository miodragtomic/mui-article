import { DefaultArticleImage } from "../DefaultArticleImage";
import { useState } from "react";
import { ImageSizeNames } from "../../types/image-types";
import { IMAGE_SIZE_MAP } from "../../constants/image-constants";
import React from "react";

export interface ArticleImageProps {
  size: ImageSizeNames;
  imageUrl: string;
  onClick?: () => void;
}

export function ArticleImage(props: ArticleImageProps) {  
  const [fallbackImage, setFallbackIamge] = useState<boolean>(false)

  const { size, imageUrl } = props;

  function onImageLoadingError() {
    setFallbackIamge(true);
  }

  const { container} = IMAGE_SIZE_MAP[size];

  return (
      <React.Fragment>
        {fallbackImage != true 
        ? ( 
          <img 
            src={imageUrl ?? "noimage.jpg"} 
            width={container.width}
            height={container.height}
            onError={onImageLoadingError}
            onClick={props?.onClick}
            />
        )
        : (
        <DefaultArticleImage
          size={size}
          onClick={props?.onClick}
         /> 
        )
    }
    </React.Fragment>
  )
}