import styled from "styled-components";
import ProfileImage from "../ProfileImage";
import PersonalInformation from "../PersonalInformation";
import ProfessionDescription from "../ProfessionDescription";

const ProfileCardContainer = styled.article`
  background: #1f1f1f;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 5px;
`;

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <ProfileImage />
      <PersonalInformation />
      <ProfessionDescription />
    </ProfileCardContainer>
  );
};

export default ProfileCard;
