import { DefaultArticleImage } from "../DefaultArticleImage";
import { useMemo, useState } from "react";
import { ImageSizeNames } from "../../types/image-types";
import { IMAGE_SIZE_MAP } from "../../constants/image-constants";
import React from "react";

export interface ArticleImageProps {
  size: ImageSizeNames;
  imageUrl: string;
  onImageClick?: (imageUrl: string) => void;
  slotProps?: {
    defaultArticleImage?: object
  }
}

export function ArticleImage(props: ArticleImageProps) {  
  const [fallbackImage, setFallbackIamge] = useState<boolean>(false)

  const { size, imageUrl } = props;  

  function onImageLoadingError() {
    setFallbackIamge(true);
  }

  const { container} = IMAGE_SIZE_MAP[size];

  const actualImageUrl = useMemo( () =>{
    return imageUrl ?? "noimage.jpg";
  }, [imageUrl])

  function onClick() {
    if(props?.onImageClick) {
      props.onImageClick(actualImageUrl)
    }
  }

  return (
      <React.Fragment>
        {fallbackImage != true 
        ? ( 
          <img 
            src={actualImageUrl } 
            width={container.width}
            height={container.height}
            onError={onImageLoadingError}
            onClick={onClick}
            />
        )
        : (
        <DefaultArticleImage
          size={size}
          onClick={onClick}
          {...(props?.slotProps?.defaultArticleImage ?? {})}
         /> 
        )
    }
    </React.Fragment>
  )
}