import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import Theme from './theme'
import LogoGrid from '../src/components/Common/LogoGrid'

addDecorator(Theme)

// Logo = image only
const joyentLogo = {
  title: 'logo joyent',
  file: {
    url:
      '//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png'
  },
  fluid: {
    aspectRatio: 1.9722222222222223,
    sizes: '(max-width: 250px)',
    src:
      '//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=250&q=50',
    srcSet:
      '//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=63&h=32&q=50 63w,\n//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=125&h=63&q=50 125w,\n//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=250&h=127&q=50 250w,\n//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=375&h=190&q=50 375w,\n//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=426&h=216&q=50 426w',
    srcSetWebp:
      '//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=63&h=32&q=50&fm=webp 63w,\n//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=125&h=63&q=50&fm=webp 125w,\n//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=250&h=127&q=50&fm=webp 250w,\n//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=375&h=190&q=50&fm=webp 375w,\n//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=426&h=216&q=50&fm=webp 426w',
    srcWebp:
      '//images.ctfassets.net/22g1lenhck4z/4lDpIAChXaeMsuQYE0CoWK/fa14cd9ead4f02a388088ad75b82e9f2/logo_joyent.png?w=250&q=50&fm=webp'
  }
}

const trainlineLogo = {
  title: 'Trainline logo',
  file: {
    url:
      '//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png'
  },
  fluid: {
    aspectRatio: 1.963302752293578,
    sizes: '(max-width: 250px)',
    src:
      '//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=250&q=50',
    srcSet:
      '//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=63&h=32&q=50 63w,\n//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=125&h=64&q=50 125w,\n//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=250&h=127&q=50 250w,\n//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=375&h=191&q=50 375w,\n//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=428&h=218&q=50 428w',
    srcSetWebp:
      '//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=63&h=32&q=50&fm=webp 63w,\n//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=125&h=64&q=50&fm=webp 125w,\n//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=250&h=127&q=50&fm=webp 250w,\n//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=375&h=191&q=50&fm=webp 375w,\n//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=428&h=218&q=50&fm=webp 428w',
    srcWebp:
      '//images.ctfassets.net/22g1lenhck4z/uMyL5BMB44SSaEG0646Cq/7fe6f35c54a9955edd459a63cf3b335b/trainlie.png?w=250&q=50&fm=webp'
  }
}

// Logo = company - i.e. name, url + image

const NodeJsFoundation = {
  name: 'Node.js Foundation',
  url: 'https://foundation.nodejs.org/',
  image: {
    title: 'Node.js Foundation Icon',
    file: {
      url:
        '//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png'
    }
  },
  fluid: {
    aspectRatio: 2.212962962962963,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAQAAACYyMTDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQXCAwTQlJVAAAAAItJREFUGNNjYKA6MGVkYJjByMBgYmgiZ8aIWx2zZLm2nFaxMOsrF0ZBDhfxE8/+Y1fIwrjqD+t7Vr4XnLd5r7xmOPOXgaGV5T9zzU90hYwMDAwM/SIMRgwXvgoyMDP8Y2BkEGL49P8Pw+/aOxgKGRgmcBd87WL4ycjAwMDwn4GZ4S8Dy/8q6gcICgAAmrgitBMJI4AAAAAASUVORK5CYII=',
    sizes: '(max-width: 250px)',
    src:
      '//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=250&q=50',
    srcSet:
      '//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=63&h=28&q=50 63w,\n//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=125&h=56&q=50 125w,\n//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=250&h=113&q=50 250w,\n//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=375&h=169&q=50 375w,\n//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=478&h=216&q=50 478w',
    srcSetWebp:
      '//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=63&h=28&q=50&fm=webp 63w,\n//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=125&h=56&q=50&fm=webp 125w,\n//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=250&h=113&q=50&fm=webp 250w,\n//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=375&h=169&q=50&fm=webp 375w,\n//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=478&h=216&q=50&fm=webp 478w',
    srcWebp:
      '//images.ctfassets.net/22g1lenhck4z/3JdQKrwffLiRfJWdYud8ex/24c55328e7dcc28807874834ef319d37/node_js_foundation.png?w=250&q=50&fm=webp'
  }
}

const CNCF = {
  name: 'Cloud Native Computing Foundation',
  url: 'https://www.cncf.io/',
  image: {
    title: 'Cloud Native Computing Foundation Icon',
    file: {
      url:
        '//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png'
    }
  },
  fluid: {
    aspectRatio: 2.212962962962963,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAQAAACYyMTDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQXCAwTQlJVAAAAAIVJREFUGNOtj0sKglAAAOf5yV+GoS5UWghCh+gCbTpAJ/BOnadtdIIQKQQXBUpIpFbb3IqzHgYGpkak+w1X8svhhoyEQYNGi0JL/i8qq6VztIr3ljsmHQYvbGoa+mFRSpxvpfprDYFKwIw5PS5PyqEou7swzqLz5/TAo8NigUAnIpt8cyw/X30e+RBnLSIAAAAASUVORK5CYII=',
    sizes: '(max-width: 250px)',
    src:
      '//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=250&q=50',
    srcSet:
      '//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=63&h=28&q=50 63w,\n//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=125&h=56&q=50 125w,\n//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=250&h=113&q=50 250w,\n//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=375&h=169&q=50 375w,\n//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=478&h=216&q=50 478w',
    srcSetWebp:
      '//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=63&h=28&q=50&fm=webp 63w,\n//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=125&h=56&q=50&fm=webp 125w,\n//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=250&h=113&q=50&fm=webp 250w,\n//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=375&h=169&q=50&fm=webp 375w,\n//images.ctfassets.net/22g1lenhck4z/4bM0CFX3j3lnK4Wd7RrjMQ/401e2298b29c5ba989dcb97cc8295452/cloud_native_computing_foundation.png?w=478&h=216&q=50&fm=webp'
  }
}

const singleRow = [joyentLogo, trainlineLogo, joyentLogo, trainlineLogo]
const clickableRow = [NodeJsFoundation, CNCF, NodeJsFoundation, CNCF]
const twoRows = [
  joyentLogo,
  trainlineLogo,
  joyentLogo,
  trainlineLogo,
  trainlineLogo,
  joyentLogo,
  trainlineLogo,
  joyentLogo
]
const unevenNumberOfLogos = [
  joyentLogo,
  trainlineLogo,
  joyentLogo,
  trainlineLogo,
  trainlineLogo
]

storiesOf('LogoGrid', module)
  .add('single row', () => {
    return <LogoGrid logos={singleRow} />
  })
  .add('single row with clickable logos', () => {
    return <LogoGrid logos={clickableRow} />
  })
  .add('two rows', () => {
    return <LogoGrid logos={twoRows} />
  })
  .add('uneven number', () => {
    return <LogoGrid logos={unevenNumberOfLogos} />
  })
