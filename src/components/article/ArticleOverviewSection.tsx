import { ArticleThumbnailList } from "./ArticleThumbnailList";
import { ArticleOverview } from "./ArticleOverview";
import { ArticleModel } from "../../models/ArticleModel";
import { useState } from "react";
import  Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { ArticleImagePreview } from "./ArticleImagePreview";


export type ArticleOverviewSectionProps = Pick<ArticleModel, 'images'>

export function ArticleOverviewSection(props: ArticleOverviewSectionProps) {
  const { images } = props;
  const [selectedImage, setSelectedImage] = useState<string>(props.images?.length > 0
    ? props.images[0]
    : '/no-image.jpg'
  )

  const theme = useTheme();
  const smAndUp = useMediaQuery(theme.breakpoints.up('sm'));

  const gridItemSize = {
    xs: 12,
    sm: 12,
    md: 7,
    lg: 5,
    xl: 4
  }

  function onThumbnailImageClick(imageUrl: string) {
    setSelectedImage(imageUrl);
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid size={{...gridItemSize}}>
          <Stack direction={ smAndUp ? "row" : "column" } justifyContent="start" alignItems="center" gap={2}>
            <ArticleThumbnailList imageUrlList={images} onImageClick={onThumbnailImageClick} />
            <ArticleImagePreview size="large" imageUrl={selectedImage}/>          
          </Stack>
        </Grid>
        <Grid size={{ ...gridItemSize}}>
          <ArticleOverview />
        </Grid>
      </Grid>
    </Box>
  )
}