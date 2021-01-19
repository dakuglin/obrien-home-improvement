//declarations file for styling

import "styled-components";

declare module 'styled-components' {

  export interface DefaultTheme {

    colors: {
      main: string;
      secondary: string;
    };
  };
};