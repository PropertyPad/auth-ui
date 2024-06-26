import { Auth as AuthProps } from '../../types';
declare function Auth({ supabaseClient, socialLayout, providers, providerScopes, queryParams, view, redirectTo, onlyThirdPartyProviders, magicLink, showLinks, appearance, theme, localization, otpType, additionalData, passwordLimit, children, }: AuthProps): JSX.Element | null;
declare namespace Auth {
    var ForgottenPassword: typeof import("./interfaces/ForgottenPassword").ForgottenPassword;
    var UpdatePassword: typeof import("./interfaces/UpdatePassword").UpdatePassword;
    var MagicLink: typeof import("./interfaces/MagicLink").MagicLink;
    var UserContextProvider: (props: import("./UserContext").Props) => import("react/jsx-runtime").JSX.Element;
    var useUser: () => import("./UserContext").AuthSession;
}
export default Auth;
//# sourceMappingURL=Auth.d.ts.map