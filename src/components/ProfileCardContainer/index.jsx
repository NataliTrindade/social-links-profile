import styled from "styled-components";

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
  return <ProfileCardContainer></ProfileCardContainer>;
};

export default ProfileCard;
