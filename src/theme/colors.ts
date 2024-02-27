import { alpha } from '@mui/material'
import { PaletteOptions } from '@mui/material/styles'

export const lightPalette: PaletteOptions = {
  // DesignSystem: base
  common: {
    black: '#202020',
    white: '#FFFFFF',
  },
  primary: {
    darker: '#0D1B2A',
    dark: '#0D1B2A',
    main: '#0D1B2A',
    light: '#0D1B2A',
    lighter: '#0D1B2A',
    contrastText: '#ffffff',
  },
  secondary: {
    darker: '#0C0C0C',
    dark: '#161616',
    main: '#202020',
    light: '#D2D2D2',
    lighter: '#F4F4F4',
    contrastText: '#FFFFFF',
  },
  success: {
    darker: '#1D9337',
    dark: '#1D9337',
    main: '#5AD475',
    light: alpha('#5AD4751A', 0.1),
    lighter: alpha('#5AD4751A', 0.1),
    contrastText: '#1D9337',
  },
  error: {
    darker: '#98132C',
    dark: '#BB1837',
    main: '#DF1C41',
    light: '#F9D2D9',
    lighter: '#FDEFF2',
    contrastText: '#FFFFFF',
  },
  warning: {
    darker: '#A4541E',
    dark: '#CA6725',
    main: '#F17B2C',
    light: '#FCE5D5',
    lighter: '#FEF6F0',
    contrastText: '#FFFFFF',
  },
  // DesignSystem: text & icons
  text: {
    primary: '#778DA9',
    secondary: '#0D1B2A',
    placeholder: 'rgba(32, 32, 32, 0.44)',
    disabled: 'rgba(32, 32, 32, 0.28)',
  },
  // DesignSystem: background/component
  action: {
    // DesignSystem: background/component/primary
    active: 'rgba(32, 32, 32, 0.05)',
    hover: 'rgba(32, 32, 32, 0.10)',
    // DesignSystem: background/component/pressed
    focus: 'rgba(32, 32, 32, 0.15)',
    selected: 'rgba(32, 32, 32, 0.05)',
    disabled: 'rgba(32, 32, 32, 0.05)',
  },
  // DesignSystem: background/bg
  background: {
    // DesignSystem: background/bg/primary
    default: '#EFEFEF',
    // DesignSystem: background/bg/opacity
    light: 'rgba(255, 255, 255, 0.70)',
    // DesignSystem: background/pure
    paper: '#FFFFFF',
  },
  divider: 'rgba(32, 32, 32, 0.05)',
  additional: {
    layerBorder: '#FFFFFF',
    pureBlack: '#262626',
    gradient: 'linear-gradient(180deg, #EFEFEF 0%, #EBEFF3 100%)',
  },
}

export const darkPalette: PaletteOptions = {
  // DesignSystem: base
  common: {
    black: '#202020',
    white: '#FFFFFF',
  },
  primary: {
    darker: '#DDFE84',
    dark: '#D5FD67',
    main: '#CDFD4A',
    light: '#313D12',
    lighter: '#191E09',
    contrastText: '#202020',
  },
  secondary: {
    darker: '#676767',
    dark: '#444444',
    main: '#202020',
    light: '#1B1B1B',
    lighter: '#111111',
    contrastText: '#FFFFFF',
  },
  success: {
    darker: '#78D9B6',
    dark: '#58D0A4',
    main: '#38C793',
    light: '#0D3023',
    lighter: '#071812',
    contrastText: '#FFFFFF',
  },
  error: {
    darker: '#E9657E',
    dark: '#E4405F',
    main: '#DF1C41',
    light: '#360710',
    lighter: '#1B0308',
    contrastText: '#FFFFFF',
  },
  warning: {
    darker: '#F5A570',
    dark: '#F3904E',
    main: '#F17B2C',
    light: '#3A1E0B',
    lighter: '#2A2521',
    contrastText: '#FFFFFF',
  },
  // DesignSystem: text & icons
  text: {
    primary: 'rgba(255, 255, 255, 0.90)',
    secondary: 'rgba(255, 255, 255, 0.56)',
    placeholder: 'rgba(255, 255, 255, 0.44)',
    disabled: 'rgba(255, 255, 255, 0.28)',
  },
  // DesignSystem: background/component
  action: {
    // DesignSystem: background/component/primary
    active: 'rgba(255, 255, 255, 0.05)',
    hover: 'rgba(255, 255, 255, 0.10)',
    // DesignSystem: background/component/pressed
    focus: 'rgba(255, 255, 255, 0.15)',
    selected: 'rgba(255, 255, 255, 0.05)',
    disabled: 'rgba(255, 255, 255, 0.05)',
  },
  // DesignSystem: background/bg
  background: {
    // DesignSystem: background/bg/primary
    default: '#1B1B1B',
    // DesignSystem: background/bg/opacity
    light: 'rgba(255, 255, 255, 0.05)',
    // DesignSystem: background/pure
    paper: '#2B2B2B',
  },
  divider: 'rgba(255, 255, 255, 0.05)',
  additional: {
    layerBorder: 'rgba(255, 255, 255, 0.05)',
    pureBlack: 'rgba(255, 255, 255, 0.10)',
    gradient: 'linear-gradient(180deg, #1D1D1D 0%, #1A1A1A 100%)',
  },
}
