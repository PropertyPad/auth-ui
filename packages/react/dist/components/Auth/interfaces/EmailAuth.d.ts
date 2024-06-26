import { SupabaseClient } from '@supabase/supabase-js';
import React from 'react';
import { I18nVariables, RedirectTo, ViewSignUp, ViewSignIn } from '../../../../../shared';
import { Appearance } from './../../../types';
export interface EmailAuthProps {
    authView?: ViewSignIn | ViewSignUp;
    defaultEmail?: string;
    defaultPassword?: string;
    setAuthView?: any;
    setDefaultEmail?: (email: string) => void;
    setDefaultPassword?: (password: string) => void;
    supabaseClient: SupabaseClient;
    showLinks?: boolean;
    redirectTo?: RedirectTo;
    additionalData?: {
        [key: string]: any;
    };
    magicLink?: boolean;
    i18n?: I18nVariables;
    appearance?: Appearance;
    passwordLimit?: boolean;
    children?: React.ReactNode;
}
declare function EmailAuth({ authView, defaultEmail, defaultPassword, setAuthView, setDefaultEmail, setDefaultPassword, supabaseClient, showLinks, redirectTo, additionalData, magicLink, i18n, appearance, passwordLimit, children, }: EmailAuthProps): import("react/jsx-runtime").JSX.Element;
export { EmailAuth };
//# sourceMappingURL=EmailAuth.d.ts.map