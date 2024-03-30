import styled from "styled-components";
import Link from "./ExternalLink";
import linksData from "./linksData";

const SocialMediaLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SocialMediaLinks = () => {
  return (
    <nav>
      <SocialMediaLinksContainer>
        {linksData.map((link) => (
          <Link
            key={link.id}
            aria-label={link.ariaLabel}
            link={link.url}
            linkName={link.label}
          />
        ))}
      </SocialMediaLinksContainer>
    </nav>
  );
};

export default SocialMediaLinks;
