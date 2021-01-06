import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { StyledLink } from '../StyledLink';
import {
  CollectionTileContent,
  CollectionTileWrapper,
  Title,
  Description,
} from './styles';

export function CollectionTile({
  backgroundImage,
  description,
  destination,
  title,
  sale,
}) {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
          <StyledLink to={destination}>Shop now</StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
}
