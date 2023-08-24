export const oktaConfig = {
  clientId: '0oa9veuaf4qsT2nkb5d7',
  issuer: 'https://dev-35751166.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: true,
}
