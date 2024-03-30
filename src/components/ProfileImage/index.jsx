import { styled } from "styled-components";
import useImageLoading from "../../hooks/useImageLoading";
import profileImage from "./avatar.webp";

const ProfileImageStylized = styled.img`
  display: block;
  margin: 0 auto;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const ProfileImage = () => {
  const imageLoaded = useImageLoading(profileImage);
  return (
    imageLoaded && (
      <ProfileImageStylized
        width={150}
        height={150}
        src={profileImage}
        alt={
          "Imagem de perfil da Jessica Randall com blusa preta transparente e cabelo em rabo de cavalo"
        }
      />
    )
  );
};

export default ProfileImage;
