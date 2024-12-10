import { ImageSizeNames, ImageSize } from "../types/image-types";

export const IMAGE_SIZE_MAP: Record<ImageSizeNames, { container: ImageSize, icon: ImageSize} > = {
  thumbnail: {
    container: {
      width: 100,
      height: 100
    },
    icon: {
      width: 31,
      height: 31
    }
  },
  medium: {
    container: {
      width: 248,
      height: 168
    },
    icon: {
      width: 100,
      height: 100
    }

  },
  large: {
    container: {
      width: 340,
      height: 340,
    },
    icon: {
      width: 100,
      height: 100
    }
  },
  strech: {
    container: {
      width: "100%",
      height: "100%"
    },
    icon: {
      width: 100,
      height: 100
    }

  },


}
