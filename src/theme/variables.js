import { css } from 'emotion';

//- --------------------------------------------------------
//-  Fonts
//- --------------------------------------------------------

export const bodyFontFamily = 'Helvetica, sans-serif;';

//- --------------------------------------------------------
//-  Colours
//- --------------------------------------------------------
export const white = '#FFF';
export const black = '#000';
export const primaryColour = '#C7893E';
export const secondaryColour = white;
export const articleHeadColour = '#f2f2f2';
export const borderColour = '#e0e0e0';
export const formHeader = '#e0f1fa';

//- --------------------------------------------------------
//-  Forms
//- --------------------------------------------------------

export const forms = css`
  border: solid 1px ${borderColour};
  font-weight: bold;
  border-radius: 5px;
  .form-header,
  .form-body {
    padding: 10px 20px;
  }
  .form-header {
    background-color: ${formHeader};
  }
  .form-body {
    label,
    input {
      width: 100%;
    }
    > div > input {
      border: solid 1px ${borderColour};
      margin: 5px 0 20px;
      padding: 5px;
    }
    section {
      margin: 5px 0 20px;
    }
  }
`;

//- --------------------------------------------------------
//-  Media Queries
//- --------------------------------------------------------
export const breakpoints = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const baseMedia = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,

  xxsDown: `(max-width: ${breakpoints.xs - 1}px)`,
  xsDown: `(max-width: ${breakpoints.sm - 1}px)`,
  smDown: `(max-width: ${breakpoints.md - 1}px)`,
  mdDown: `(max-width: ${breakpoints.lg - 1}px)`,
  lgDown: `(max-width: ${breakpoints.xl - 1}px)`,
};

const extendedMedia = {
  xsUp: baseMedia.xs,
  smUp: baseMedia.sm,
  mdUp: baseMedia.md,
  lgUp: baseMedia.lg,
  xlUp: baseMedia.xl,

  xxsOnly: baseMedia.xxsDown,
  xsOnly: `${baseMedia.xs} and ${baseMedia.smDown}`,
  smOnly: `${baseMedia.sm} and ${baseMedia.mdDown}`,
  mdOnly: `${baseMedia.md} and ${baseMedia.lgDown}`,
  lgOnly: `${baseMedia.lg} and ${baseMedia.xlDown}`,
  xlOnly: baseMedia.xl,
};

export const media = { ...baseMedia, ...extendedMedia };
