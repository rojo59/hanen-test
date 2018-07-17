import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { articleHeadColour, media } from '../../theme/variables';

let categoryColours = {
  bigfoot: '#239652',
  nessy: '#228fb5',
  jackalope: '#f99c32',
};

// Styles
const Root = styled('article')`
  box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);

  .article-head,
  .article-body {
    padding: 10px 20px;
  }

  .article-head {
    background-color: ${articleHeadColour};
    border-radius: 5px;
  }

  .article-name {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .article-category {
    span {
      text-align: center;
      display: inline-block;
      width: 120px;
      padding: 5px 0;
      border-radius: 5px;
    }
  }

  @media ${media.sm} {
    .article-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-evenly;
    }

    .article-tags {
      margin-left: 10px;
    }

    .article-category {
      flex-grow: 2;
      text-align: right;
    }
  }
`;

const Article = ({ name, description, category, tags }) => {
  return (
    <Root data-component="Article">
      <div className="article-head">
        <div className="article-name">{name}</div>
        <div className="article-tags">{tags}</div>
        <div className="article-category">
          <span
            style={{ backgroundColor: categoryColours[category.toLowerCase()] }}
          >
            {category}
          </span>
        </div>
      </div>
      <div className="article-body">
        <span>{description}</span>
      </div>
    </Root>
  );
};

Article.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Article;
