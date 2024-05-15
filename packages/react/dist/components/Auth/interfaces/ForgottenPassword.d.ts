import { SupabaseClient } from '@supabase/supabase-js';
import { I18nVariables, RedirectTo } from '../../../../../shared';
import { Appearance } from '../../../types';
declare function ForgottenPassword({ setAuthView, supabaseClient, redirectTo, i18n, appearance, showLinks, }: {
    setAuthView?: any;
    supabaseClient: SupabaseClient;
    redirectTo?: RedirectTo;
    i18n?: I18nVariables;
    appearance?: Appearance;
    showLinks?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { ForgottenPassword };
//# sourceMappingURL=ForgottenPassword.d.ts.map