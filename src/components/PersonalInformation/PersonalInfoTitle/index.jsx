import styled from "styled-components";

const PersonalInfoTitleContainer = styled.h1`
  color: #fff;
`;

const PersonalInfoTitle = ({ title }) => {
  return (
  <PersonalInfoTitleContainer>
    {title}
  </PersonalInfoTitleContainer>
  );
};

export default PersonalInfoTitle;
