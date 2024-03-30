import styled from "styled-components";

const StyledExternalLinkItem = styled.li`
  list-style: none;
  background: #333333;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  &:hover a {
    color: #c5f82a;
  }
`;

const StyledExternalLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const ExternalLink = ({ link, linkName }) => {
  return (
    <StyledExternalLinkItem>
      <StyledExternalLink
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkName}
      </StyledExternalLink>
    </StyledExternalLinkItem>
  );
};

export default ExternalLink;
