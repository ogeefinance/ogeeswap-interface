// eslint-disable-next-line import/no-unresolved
import { OgeeTheme } from '@ogeefinance/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends OgeeTheme {}
}
