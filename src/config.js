let baseUrl = '/'

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://admin.industry.easybao.com'
  // if (TEST) {
  //   console.log('in TEST')
  //   baseUrl = 'http://47.100.7.33:8038'
  // }
  // if (DEV) {
  //   console.log('in DEV')
  //   baseUrl = 'http://dev.adminapi.industry.easybao.com'
  // }
  // if (PRE) {
  //   console.log('in PRE')
  //   baseUrl = 'http://adminpre.industry.easybao.com'
  // }
}

export { baseUrl }