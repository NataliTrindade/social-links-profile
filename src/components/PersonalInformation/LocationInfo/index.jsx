import styled from "styled-components";

const LocationInfoContainer = styled.p`
  color: #c5f82a;
  font-weight: bold;
`;

const LocationInfo = ({ location }) => {
  return (
  <LocationInfoContainer>
    {location}
  </LocationInfoContainer>);
};

export default LocationInfo;
