import { SupabaseClient } from '@supabase/supabase-js';
import { I18nVariables, OtpType } from '../../../../../shared';
import { Appearance } from '../../../types';
declare function VerifyOtp({ setAuthView, supabaseClient, otpType, i18n, appearance, showLinks, }: {
    setAuthView?: any;
    supabaseClient: SupabaseClient;
    otpType: OtpType;
    i18n?: I18nVariables;
    appearance?: Appearance;
    showLinks?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { VerifyOtp };
//# sourceMappingURL=VerifyOtp.d.ts.map