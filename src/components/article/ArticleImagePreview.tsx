import Box from "@mui/material/Box";
import { ArticleImage, type ArticleImageProps } from "./ArticleImage";
import { SvgIcon } from "@mui/material";
import { ZoomInIcon } from "../icons/ZoomInIcon";

export type ArticleImagePreviewProps = ArticleImageProps;

export function ArticleImagePreview(props: ArticleImagePreviewProps) {
  return (
  <Box sx={{
    position: 'relative',
    height: 'max-content',
    width: 'max-content'

  }}>
    <ArticleImage  {...props} />
    <SvgIcon 
      color="info"      
      sx={{
        position: 'absolute',
        bottom: theme => theme.spacing(0.75),
        right: theme => theme.spacing(0.75),
        color: theme => theme.palette.info.dark
      }}
      >
      <ZoomInIcon />
    </SvgIcon>
  </Box>)
}