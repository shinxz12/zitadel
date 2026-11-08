/**
 * Login names of org-scoped users carry the org domain (`admin@smart-tech.auth.example.com`). When
 * NEXT_PUBLIC_HIDDEN_LOGINNAME_DOMAIN is set (e.g. `auth.example.com`), the UI shows only the part
 * before `@` for names under that domain. Display only: forms and API calls keep the full name.
 */
const hiddenDomain = process.env.NEXT_PUBLIC_HIDDEN_LOGINNAME_DOMAIN?.toLowerCase();

export function displayLoginName(loginName: string | undefined): string | undefined {
  if (!loginName || !hiddenDomain) return loginName;
  const at = loginName.lastIndexOf("@");
  if (at < 0) return loginName;
  const domain = loginName.slice(at + 1).toLowerCase();
  return domain === hiddenDomain || domain.endsWith(`.${hiddenDomain}`) ? loginName.slice(0, at) : loginName;
}
