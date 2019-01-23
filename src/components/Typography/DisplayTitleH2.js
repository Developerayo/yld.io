import styled from 'styled-components'
import is from 'styled-is'
import breakpoint from 'styled-components-breakpoint'
import remcalc from 'remcalc'

const DisplayTitleH2 = styled.h2`
  color: ${props => props.theme.colors.text};
  font-weight: 400;
  font-size: ${remcalc(26)};
  line-height: ${remcalc(30)};
  padding: ${remcalc(12)} 0 ${remcalc(12)} 0;

  ${is('reverse')`
    color: ${props => props.theme.colors.white};
  `};

  ${is('textLight')`
    color: ${props => props.theme.colors.textLight};
  `};

  ${breakpoint('tablet')`
    font-size: ${remcalc(32)};
    line-height: ${remcalc(36)};
    padding: ${remcalc(13)} 0 ${remcalc(11)} 0;
  `}
`

export default DisplayTitleH2
