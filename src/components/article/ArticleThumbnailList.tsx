import Stack from '@mui/material/Stack';
import { ArticleImage } from './ArticleImage';
import { useMediaQuery, useTheme } from '@mui/material';


export interface ArticleThumbnailProps {
  imageUrlList: string[]
}

export function ArticleThumbnailList(props: ArticleThumbnailProps) {
  const theme = useTheme();
  const smAndUp = useMediaQuery(theme.breakpoints.up('sm'));


  function onImageClick() {
    console.log("Image clicked");
  }

  return (
    <Stack direction={smAndUp ? 'column': 'row'} spacing={2}>
      {
        props.imageUrlList.map( imageUrl => (
          <ArticleImage 
            key={imageUrl}
            size='thumbnail' 
            imageUrl={imageUrl} 
            onClick={onImageClick}
          />
        ))
      }
    </Stack>
  )
}