import React, { Fragment, useState } from 'react'
import { Link } from 'gatsby'
import remcalc from 'remcalc'
import styled from 'styled-components'

import logo from '../../../images/logo_animated.gif'
import ServiceSpecialityLogo from '../../../images/service-speciality-logo'
import {
  servicesRegExp,
  servicesColors,
  getSpecialityService
} from './ServicesSpecialitiesMap'

const StyledLink = styled(Link)`
  height: ${remcalc(48)};
  width: ${remcalc(48)};

  @media screen and (min-width: 960px) {
    height: ${remcalc(54)};
    width: ${remcalc(54)};
  }
`

const LogoLink = ({ path = '/' }) => {
  const isServicePage = path.search(servicesRegExp) > -1
  const isSpecialityPage = path.includes('speciality')

  const serviceTitle = isServicePage ? path.match(servicesRegExp)[0] : null
  const service = isSpecialityPage ? getSpecialityService(path) : serviceTitle

  const originalFillColor =
    servicesColors[isSpecialityPage ? service : 'default']
  const [fillColor, setFillColor] = useState(originalFillColor)

  return (
    <Fragment>
      {isSpecialityPage || isServicePage ? (
        <StyledLink
          to="/"
          onMouseEnter={() =>
            setFillColor(
              servicesColors[isServicePage ? 'defaultHover' : 'specialityHover']
            )
          }
          onMouseLeave={() => setFillColor(originalFillColor)}
        >
          <ServiceSpecialityLogo
            fillColor={fillColor}
            textColor={
              servicesColors[isServicePage ? 'defaultText' : 'specialityText']
            }
          />
        </StyledLink>
      ) : (
        <Link to="/">
          <img role="link" height="48" src={logo} alt="yld logo" />
        </Link>
      )}
    </Fragment>
  )
}

export default LogoLink
