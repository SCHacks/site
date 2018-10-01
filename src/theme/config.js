import { theme } from '@hackclub/design-system'

export const colors = {
  // greyscale
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  // smoke3: '#c0ccda',
  // smoke2: '#d3dce6',
  smoke: '#e0e6ed',
  // snow3: '#e5e9f2',
  // snow2: '#eff2f7',
  snow: '#f9fafc',
  white: '#ffffff',
  // brand
  primary: '#ff5a5f',
  primaryLight: '#ff7e82',
  primaryDark: '#e00007',
  alt: '#007a87',
  altLight: '#009aab',
  altDark: '#004f58',
  success: '#3fb34f',
  error: '#b23f42',
  warm: '#ffb400',
  warmWash: '#ffdc89',
  cool: '#00bdde',
  coolWash: '#7cecff'
}
// for DS input
colors.blue = [colors.altDark, colors.altLight, colors.altLight]
colors.info = colors.cool

theme.colors = colors

const baseFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'

const sans = 'Nunito'
const sansFamily = `${sans},${baseFamily}`

theme.font = sansFamily

export default theme
