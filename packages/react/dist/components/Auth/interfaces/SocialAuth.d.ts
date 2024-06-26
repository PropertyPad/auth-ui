import { Provider, SupabaseClient } from '@supabase/supabase-js';
import { I18nVariables, ProviderScopes, SocialLayout } from '../../../../../shared';
import { Appearance } from '../../../types';
interface SocialAuthProps {
    supabaseClient: SupabaseClient;
    socialLayout?: SocialLayout;
    providers?: Provider[];
    providerScopes?: Partial<ProviderScopes>;
    queryParams?: {
        [key: string]: string;
    };
    redirectTo?: RedirectTo;
    onlyThirdPartyProviders?: boolean;
    view?: 'sign_in' | 'sign_up' | 'magic_link';
    i18n?: I18nVariables;
    appearance?: Appearance;
}
type RedirectTo = undefined | string;
declare function SocialAuth({ supabaseClient, socialLayout, providers, providerScopes, queryParams, redirectTo, onlyThirdPartyProviders, view, i18n, appearance, }: SocialAuthProps): import("react/jsx-runtime").JSX.Element;
export { SocialAuth };
//# sourceMappingURL=SocialAuth.d.ts.map