import { useState, useEffect } from "react";
import preLoadImage from "../components/ProfileImage/preLoadImage";

const useImageLoading = (path) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      await preLoadImage(path);
      setImageLoaded(true);
    };

    loadImage();
  }, [path]);

  return imageLoaded;
};

export default useImageLoading;