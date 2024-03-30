import styled from "styled-components";
import PersonalInfoTitle from "./PersonalInfoTitle";
import LocationIfo from "./LocationInfo";

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;

const PersonalInformation = () => {
  return (
    <PersonalInfoContainer
      aria-label="Informações pessoais">
      <PersonalInfoTitle
        title={'Jessica Randall'}
      />
      <LocationIfo 
        location={'London, United Kingdom'}
      />
    </PersonalInfoContainer>
  )
}

export default PersonalInformation;