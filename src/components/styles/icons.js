import styled from 'styled-components'

import woff from 'assets/icons/iconfont.woff'
import ttf from 'assets/icons/iconfont.ttf'

import woff2 from 'assets/icons/iconfont2.woff'
import ttf2 from 'assets/icons/iconfont2.ttf'

const styledIconOne = (Comp) => {
  return styled(Comp) `
    @font-face {
      font-family: 'iconfont';
      src: url(${woff}) format('woff'), url(${ttf}) format('truetype') , url(${woff2}) format('woff') , url(${ttf2}) format('truetype')
    }
  `
}

const styledIconTwo = (Comp) => {
  return styled(Comp) `
    @font-face {
      font-family: 'iconfont';
      src: url(${woff2}) format('woff') , url(${ttf2}) format('truetype')
    }
  `
}

export {
  styledIconOne,
  styledIconTwo
}