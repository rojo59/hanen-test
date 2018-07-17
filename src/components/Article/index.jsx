import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { articleHeadColour, borderRadius, media } from '../../theme/variables';

// Styles
const Root = styled('article')`
  box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);

  .article-head,
  .article-body {
    padding: 10px 20px;
  }

  .article-head {
    background-color: ${articleHeadColour};
    border-radius: ${borderRadius};
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
      border-radius: ${borderRadius};
    }
  }

  @media ${media.sm} {
    .article-head {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      flex-wrap: wrap;
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

const Article = ({ name, description, category, tags, categoryColours }) => {
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
  categoryColours: PropTypes.object.isRequired,
};

export default Article;
