import react from "react";
/** Components */
import { Image } from "react-native";

/**
 * It diplays an image on the screen. It can be either a uri that the user selected or
 * a defualt image.
 * @param placeholderImageSource a link to a default image that shows up before
 * the user has added an image for the first time (e.g., require("...")).
 * @param selectedImage a uri for an image that the user has selected.
 * @returns An Image. It will be either a defualt one or on that the user selected.
 */
export default function ProfileImage({
  placeholderImageSource,
  selectedImage,
}) {
  let imageSource;
  if (selectedImage !== null) {
    imageSource = { uri: selectedImage };
  } else {
    imageSource = placeholderImageSource;
  }
  return (
    <Image
      source={imageSource}
      style={{
        width: undefined,
        height: undefined,
        flex: 2,
      }}
    />
  );
}
