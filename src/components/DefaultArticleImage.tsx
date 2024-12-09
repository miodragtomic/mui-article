import SvgIcon from "@mui/material/SvgIcon"
import { PackageIcon } from "./icons/PackageIcon"
import Box from "@mui/material/Box";
import { ImageSizeNames } from "../types/image-types";
import { IMAGE_SIZE_MAP } from "../constants/image-constants";

export interface DefaultArticleImageProps {
  size: ImageSizeNames;
  onClick?: () => void
}


export function DefaultArticleImage(props: DefaultArticleImageProps) {  
  const { size } = props;
  const { container, icon } = IMAGE_SIZE_MAP[size];

  function onDefaultImageClick() {
    if(props?.onClick) {
      props.onClick();
    }
  }

  return (
    <Box            
      sx={{
        width: container.width,
        height: container.height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid',
        borderWidth: 3,
        borderColor: 'primary'
      }}
      onClick={onDefaultImageClick}
    >
      <SvgIcon sx={{ width: icon.width, height: icon.height }}>
        <PackageIcon />
      </SvgIcon>
    </Box>
  )
}
