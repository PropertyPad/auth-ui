import { css as P, createStitches as ce, createTheme as de } from "@stitches/core";
import e, { useState as u, useRef as ue, useEffect as U, createContext as me, useContext as ge } from "react";
var p = {
  SIGN_IN: "sign_in",
  SIGN_UP: "sign_up",
  FORGOTTEN_PASSWORD: "forgotten_password",
  MAGIC_LINK: "magic_link",
  UPDATE_PASSWORD: "update_password",
  VERIFY_OTP: "verify_otp"
}, le = "supabase-auth-ui", he = {
  // interfaces
  ROOT: "root",
  SIGN_IN: p.SIGN_IN,
  SIGN_UP: p.SIGN_UP,
  FORGOTTEN_PASSWORD: p.FORGOTTEN_PASSWORD,
  MAGIC_LINK: p.MAGIC_LINK,
  UPDATE_PASSWORD: p.UPDATE_PASSWORD,
  // ui
  anchor: "ui-anchor",
  button: "ui-button",
  container: "ui-container",
  divider: "ui-divider",
  input: "ui-input",
  label: "ui-label",
  loader: "ui-loader",
  message: "ui-message"
};
function A(t, n, l) {
  var o, r;
  const E = [], h = he[t];
  return E.push(
    l != null && l.prependedClassName ? (l == null ? void 0 : l.prependedClassName) + "_" + h : le + "_" + h
  ), (o = l == null ? void 0 : l.className) != null && o[t] && E.push((r = l == null ? void 0 : l.className) == null ? void 0 : r[t]), ((l == null ? void 0 : l.extend) === void 0 || (l == null ? void 0 : l.extend) === !0) && E.push(n), E;
}
function W(t, n) {
  let l;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (Array.isArray(n))
      for (l = 0; l < n.length; l++)
        t[l] = W(t[l], n[l]);
    else
      for (l in n)
        t[l] = W(t[l], n[l]);
    return t;
  }
  return n;
}
function G(t, ...n) {
  let l = n.length;
  for (let o = 0; o < l; o++)
    t = W(t, n[o]);
  return t;
}
function fe(t, n) {
  return t.replace(
    /{{(\w+)}}/g,
    (l, o) => n.hasOwnProperty(o) ? n[o] : l
  );
}
var _e = {
  sign_up: {
    email_label: "Email address",
    password_label: "Create a Password",
    email_input_placeholder: "Your email address",
    password_input_placeholder: "Your password",
    button_label: "Sign up",
    loading_button_label: "Signing up ...",
    social_provider_text: "Sign in with {{provider}}",
    link_text: "Don't have an account? Sign up",
    confirmation_text: "Check your email for the confirmation link"
  },
  sign_in: {
    email_label: "Email address",
    password_label: "Your Password",
    email_input_placeholder: "Your email address",
    password_input_placeholder: "Your password",
    button_label: "Sign in",
    loading_button_label: "Signing in ...",
    social_provider_text: "Sign in with {{provider}}",
    link_text: "Already have an account? Sign in"
  },
  magic_link: {
    email_input_label: "Email address",
    email_input_placeholder: "Your email address",
    button_label: "Send Magic Link",
    loading_button_label: "Sending Magic Link ...",
    link_text: "Send a magic link email",
    confirmation_text: "Check your email for the magic link"
  },
  forgotten_password: {
    email_label: "Email address",
    password_label: "Your Password",
    email_input_placeholder: "Your email address",
    button_label: "Send reset password instructions",
    loading_button_label: "Sending reset instructions ...",
    link_text: "Forgot your password?",
    confirmation_text: "Check your email for the password reset link"
  },
  update_password: {
    password_label: "New password",
    password_input_placeholder: "Your new password",
    button_label: "Update password",
    loading_button_label: "Updating password ...",
    confirmation_text: "Your password has been updated"
  },
  verify_otp: {
    email_input_label: "Email address",
    email_input_placeholder: "Your email address",
    phone_input_label: "Phone number",
    phone_input_placeholder: "Your phone number",
    token_input_label: "Token",
    token_input_placeholder: "Your Otp token",
    button_label: "Verify token",
    loading_button_label: "Signing in ..."
  }
};
const Ee = P({
  fontFamily: "$bodyFontFamily",
  fontSize: "$baseBodySize",
  marginBottom: "$anchorBottomMargin",
  color: "$anchorTextColor",
  display: "block",
  textAlign: "center",
  textDecoration: "underline",
  "&:hover": {
    color: "$anchorTextHoverColor"
  }
}), B = ({ children: t, appearance: n, ...l }) => {
  var r;
  const o = A(
    "anchor",
    Ee(),
    n
  );
  return /* @__PURE__ */ e.createElement(
    "a",
    {
      ...l,
      style: (r = n == null ? void 0 : n.style) == null ? void 0 : r.anchor,
      className: o.join(" ")
    },
    t
  );
}, we = P({
  fontFamily: "$buttonFontFamily",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  borderRadius: "$borderRadiusButton",
  fontSize: "$baseButtonSize",
  padding: "$buttonPadding",
  cursor: "pointer",
  borderWidth: "$buttonBorderWidth",
  borderStyle: "solid",
  width: "100%",
  transitionProperty: "background-color",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "100ms",
  "&:disabled": {
    opacity: 0.7,
    cursor: "unset"
  },
  variants: {
    color: {
      default: {
        backgroundColor: "$defaultButtonBackground",
        color: "$defaultButtonText",
        borderColor: "$defaultButtonBorder",
        "&:hover:not(:disabled)": {
          backgroundColor: "$defaultButtonBackgroundHover"
        }
      },
      primary: {
        backgroundColor: "$brand",
        color: "$brandButtonText",
        borderColor: "$brandAccent",
        "&:hover:not(:disabled)": {
          backgroundColor: "$brandAccent"
        }
      }
    }
  }
}), O = ({
  children: t,
  color: n = "default",
  appearance: l,
  icon: o,
  loading: r = !1,
  ...E
}) => {
  var w;
  const h = A(
    "button",
    we({ color: n }),
    l
  );
  return /* @__PURE__ */ e.createElement(
    "button",
    {
      ...E,
      style: (w = l == null ? void 0 : l.style) == null ? void 0 : w.button,
      className: h.join(" "),
      disabled: r
    },
    o,
    t
  );
}, Ce = P({
  display: "flex",
  gap: "4px",
  variants: {
    direction: {
      horizontal: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(48px, 1fr))"
      },
      vertical: {
        flexDirection: "column",
        margin: "8px 0"
      }
    },
    gap: {
      small: {
        gap: "4px"
      },
      medium: {
        gap: "8px"
      },
      large: {
        gap: "16px"
      }
    }
  }
}), N = ({
  children: t,
  appearance: n,
  ...l
}) => {
  var r;
  const o = A(
    "container",
    Ce({
      direction: l.direction,
      gap: l.gap
    }),
    n
  );
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      ...l,
      style: (r = n == null ? void 0 : n.style) == null ? void 0 : r.container,
      className: o.join(" ")
    },
    t
  );
}, ve = P({
  background: "$dividerBackground",
  display: "block",
  margin: "16px 0",
  height: "1px",
  width: "100%"
}), pe = ({
  children: t,
  appearance: n,
  ...l
}) => {
  var r;
  const o = A(
    "divider",
    ve(),
    n
  );
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      ...l,
      style: (r = n == null ? void 0 : n.style) == null ? void 0 : r.divider,
      className: o.join(" ")
    }
  );
}, be = P({
  fontFamily: "$inputFontFamily",
  background: "$inputBackground",
  borderRadius: "$inputBorderRadius",
  padding: "$inputPadding",
  cursor: "text",
  borderWidth: "$inputBorderWidth",
  borderColor: "$inputBorder",
  borderStyle: "solid",
  fontSize: "$baseInputSize",
  width: "100%",
  color: "$inputText",
  boxSizing: "border-box",
  "&:hover": {
    borderColor: "$inputBorderHover",
    outline: "none"
  },
  "&:focus": {
    borderColor: "$inputBorderFocus",
    outline: "none"
  },
  "&::placeholder": {
    color: "$inputPlaceholder",
    letterSpacing: "initial"
  },
  transitionProperty: "background-color, border",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "100ms",
  variants: {
    type: {
      default: {
        letterSpacing: "0px"
      },
      password: {
        letterSpacing: "0px"
      }
    }
  }
}), I = ({ children: t, appearance: n, ...l }) => {
  var r;
  const o = A(
    "input",
    be({
      type: l.type === "password" ? "password" : "default"
    }),
    n
  );
  return /* @__PURE__ */ e.createElement(
    "input",
    {
      ...l,
      style: (r = n == null ? void 0 : n.style) == null ? void 0 : r.input,
      className: o.join(" ")
    },
    t
  );
}, xe = P({
  fontFamily: "$labelFontFamily",
  fontSize: "$baseLabelSize",
  marginBottom: "$labelBottomMargin",
  color: "$inputLabelText",
  display: "block"
}), $ = ({ children: t, appearance: n, ...l }) => {
  var r;
  const o = A(
    "label",
    xe(),
    n
  );
  return /* @__PURE__ */ e.createElement(
    "label",
    {
      ...l,
      style: (r = n == null ? void 0 : n.style) == null ? void 0 : r.label,
      className: o.join(" ")
    },
    t
  );
}, ye = P({
  fontFamily: "$bodyFontFamily",
  fontSize: "$baseInputSize",
  marginBottom: "$labelBottomMargin",
  display: "block",
  textAlign: "center",
  borderRadius: "0.375rem",
  padding: "1.5rem 1rem",
  lineHeight: "1rem",
  color: "$messageText",
  backgroundColor: "$messageBackground",
  border: "1px solid $messageBorder",
  variants: {
    color: {
      danger: {
        color: "$messageTextDanger",
        backgroundColor: "$messageBackgroundDanger",
        border: "1px solid $messageBorderDanger"
      }
    }
  }
}), F = ({
  children: t,
  appearance: n,
  ...l
}) => {
  var r;
  const o = A(
    "message",
    ye({ color: l.color }),
    n
  );
  return /* @__PURE__ */ e.createElement(
    "span",
    {
      ...l,
      style: (r = n == null ? void 0 : n.style) == null ? void 0 : r.message,
      className: o.join(" ")
    },
    t
  );
};
function ne({
  setAuthView: t = () => {
  },
  supabaseClient: n,
  redirectTo: l,
  i18n: o,
  appearance: r,
  showLinks: E = !1
}) {
  var b;
  const [h, w] = u(""), [C, d] = u(""), [c, a] = u(""), [m, g] = u(!1), y = async (f) => {
    var s, x;
    if (f.preventDefault(), d(""), a(""), g(!0), h.length === 0) {
      d((s = o == null ? void 0 : o.magic_link) == null ? void 0 : s.empty_email_address), g(!1);
      return;
    }
    const { error: v } = await n.auth.signInWithOtp({
      email: h,
      options: { emailRedirectTo: l }
    });
    v ? d(v.message) : a((x = o == null ? void 0 : o.magic_link) == null ? void 0 : x.confirmation_text), g(!1);
  }, i = o == null ? void 0 : o.magic_link;
  return /* @__PURE__ */ e.createElement("form", { id: "auth-magic-link", onSubmit: y }, /* @__PURE__ */ e.createElement(N, { gap: "large", direction: "vertical", appearance: r }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement($, { htmlFor: "email", appearance: r }, i == null ? void 0 : i.email_input_label), /* @__PURE__ */ e.createElement(
    I,
    {
      id: "email",
      name: "email",
      type: "email",
      autoFocus: !0,
      placeholder: i == null ? void 0 : i.email_input_placeholder,
      onChange: (f) => {
        d && d(""), w(f.target.value);
      },
      appearance: r
    }
  )), /* @__PURE__ */ e.createElement(
    O,
    {
      color: "primary",
      type: "submit",
      loading: m,
      appearance: r
    },
    m ? i == null ? void 0 : i.loading_button_label : i == null ? void 0 : i.button_label
  ), E && /* @__PURE__ */ e.createElement(
    B,
    {
      href: "#auth-sign-in",
      onClick: (f) => {
        f.preventDefault(), t(p.SIGN_IN);
      },
      appearance: r
    },
    (b = o == null ? void 0 : o.sign_in) == null ? void 0 : b.link_text
  ), c && /* @__PURE__ */ e.createElement(F, { appearance: r }, c), C && /* @__PURE__ */ e.createElement(F, { color: "danger", appearance: r }, C)));
}
const S = P({
  width: "21px",
  height: "21px"
}), Le = ({ provider: t }) => t == "google" ? Se() : t == "facebook" ? ke() : t == "twitter" ? Me() : t == "apple" ? Ne() : t == "github" ? Fe() : t == "gitlab" ? ze() : t == "bitbucket" ? Pe() : t == "discord" ? De() : t == "azure" ? He() : t == "keycloak" ? Ie() : t == "linkedin" || t == "linkedin_oidc" ? ee() : t == "notion" ? $e() : t == "slack" ? Be() : t == "spotify" ? Ae() : t == "twitch" ? Ve() : t == "workos" ? Oe() : t == "kakao" ? Re() : null, Se = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: "21px",
    height: "21px"
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#FFC107",
      d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#FF3D00",
      d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#4CAF50",
      d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#1976D2",
      d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    }
  )
), ke = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: "21px",
    height: "21px"
  },
  /* @__PURE__ */ e.createElement("path", { fill: "#039be5", d: "M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" }),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#fff",
      d: "M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
    }
  )
), Me = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: "21px",
    height: "21px"
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "black",
      d: "M28.4714 20.3247L45.9682 0H41.822L26.6295 17.6477L14.4953 0H0.5L18.8493 26.6864L0.5 48H4.64642L20.6901 29.3635L33.5047 48H47.5L28.4704 20.3247H28.4714ZM22.7923 26.9215L20.9331 24.2642L6.14043 3.11923H12.5091L24.447 20.1839L26.3061 22.8412L41.824 45.0226H35.4553L22.7923 26.9225V26.9215Z"
    }
  )
), Ne = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    fill: "gray",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "21px",
    height: "21px"
  },
  " ",
  /* @__PURE__ */ e.createElement("path", { d: "M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z" })
), Fe = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    fill: "gray",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 30 30",
    width: "21px",
    height: "21px"
  },
  " ",
  /* @__PURE__ */ e.createElement("path", { d: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" })
), ze = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: "21px",
    height: "21px"
  },
  /* @__PURE__ */ e.createElement("path", { fill: "#e53935", d: "M24 43L16 20 32 20z" }),
  /* @__PURE__ */ e.createElement("path", { fill: "#ff7043", d: "M24 43L42 20 32 20z" }),
  /* @__PURE__ */ e.createElement("path", { fill: "#e53935", d: "M37 5L42 20 32 20z" }),
  /* @__PURE__ */ e.createElement("path", { fill: "#ffa726", d: "M24 43L42 20 45 28z" }),
  /* @__PURE__ */ e.createElement("path", { fill: "#ff7043", d: "M24 43L6 20 16 20z" }),
  /* @__PURE__ */ e.createElement("path", { fill: "#e53935", d: "M11 5L6 20 16 20z" }),
  /* @__PURE__ */ e.createElement("path", { fill: "#ffa726", d: "M24 43L6 20 3 28z" })
), Pe = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    width: "512",
    height: "512",
    viewBox: "0 0 62.42 62.42"
  },
  /* @__PURE__ */ e.createElement("defs", null, /* @__PURE__ */ e.createElement(
    "linearGradient",
    {
      id: "New_Gradient_Swatch_1",
      x1: "64.01",
      y1: "30.27",
      x2: "32.99",
      y2: "54.48",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ e.createElement("stop", { offset: "0.18", stopColor: "#0052cc" }),
    /* @__PURE__ */ e.createElement("stop", { offset: "1", stopColor: "#2684ff" })
  )),
  /* @__PURE__ */ e.createElement("title", null, "Bitbucket-blue"),
  /* @__PURE__ */ e.createElement("g", { id: "Layer_2", "data-name": "Layer 2" }, /* @__PURE__ */ e.createElement("g", { id: "Blue", transform: "translate(0 -3.13)" }, /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z",
      fill: "#2684ff"
    }
  ), /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z",
      fill: "url(#New_Gradient_Swatch_1)"
    }
  )))
), De = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: "21px",
    height: "21px"
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#536dfe",
      d: "M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
    }
  )
), He = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: "21px",
    height: "21px"
  },
  /* @__PURE__ */ e.createElement(
    "linearGradient",
    {
      id: "k8yl7~hDat~FaoWq8WjN6a",
      x1: "-1254.397",
      x2: "-1261.911",
      y1: "877.268",
      y2: "899.466",
      gradientTransform: "translate(1981.75 -1362.063) scale(1.5625)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ e.createElement("stop", { offset: "0", stopColor: "#114a8b" }),
    /* @__PURE__ */ e.createElement("stop", { offset: "1", stopColor: "#0669bc" })
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "url(#k8yl7~hDat~FaoWq8WjN6a)",
      d: "M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#0078d4",
      d: "M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "linearGradient",
    {
      id: "k8yl7~hDat~FaoWq8WjN6b",
      x1: "-1252.05",
      x2: "-1253.788",
      y1: "887.612",
      y2: "888.2",
      gradientTransform: "translate(1981.75 -1362.063) scale(1.5625)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ e.createElement("stop", { offset: "0", stopOpacity: ".3" }),
    /* @__PURE__ */ e.createElement("stop", { offset: ".071", stopOpacity: ".2" }),
    /* @__PURE__ */ e.createElement("stop", { offset: ".321", stopOpacity: ".1" }),
    /* @__PURE__ */ e.createElement("stop", { offset: ".623", stopOpacity: ".05" }),
    /* @__PURE__ */ e.createElement("stop", { offset: "1", stopOpacity: "0" })
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "url(#k8yl7~hDat~FaoWq8WjN6b)",
      d: "M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "linearGradient",
    {
      id: "k8yl7~hDat~FaoWq8WjN6c",
      x1: "-1252.952",
      x2: "-1244.704",
      y1: "876.6",
      y2: "898.575",
      gradientTransform: "translate(1981.75 -1362.063) scale(1.5625)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ e.createElement("stop", { offset: "0", stopColor: "#3ccbf4" }),
    /* @__PURE__ */ e.createElement("stop", { offset: "1", stopColor: "#2892df" })
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "url(#k8yl7~hDat~FaoWq8WjN6c)",
      d: "M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"
    }
  )
), Ie = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    width: "512",
    height: "512",
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",
      fill: "#008AAA"
    }
  )
), ee = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: "21px",
    height: "21px"
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#0288D1",
      d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#FFF",
      d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
    }
  )
), $e = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: "21px",
    height: "21px",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#fff",
      fillRule: "evenodd",
      d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#fff",
      fillRule: "evenodd",
      d: "M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#424242",
      fillRule: "evenodd",
      d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",
      clipRule: "evenodd"
    }
  )
), Be = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: "21px",
    height: "21px"
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#33d375",
      d: "M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#33d375",
      d: "M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#40c4ff",
      d: "M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#40c4ff",
      d: "M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#e91e63",
      d: "M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#e91e63",
      d: "M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#ffc107",
      d: "M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#ffc107",
      d: "M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"
    }
  )
), Ae = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    width: "512",
    height: "512",
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",
      fill: "#1ED760"
    }
  )
), Ve = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    width: "512",
    height: "512",
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ e.createElement("path", { d: "M416 240L352 304H288L232 360V304H160V64H416V240Z", fill: "white" }),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",
      fill: "#9146FF"
    }
  ),
  /* @__PURE__ */ e.createElement("path", { d: "M368 120H336V216H368V120Z", fill: "#9146FF" }),
  /* @__PURE__ */ e.createElement("path", { d: "M280 120H248V216H280V120Z", fill: "#9146FF" })
), Oe = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    width: "512",
    height: "512",
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",
      fill: "#6363F1"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",
      fill: "#6363F1"
    }
  )
), Re = () => /* @__PURE__ */ e.createElement(
  "svg",
  {
    className: S(),
    xmlns: "http://www.w3.org/2000/svg",
    width: "2500",
    height: "2500",
    viewBox: "0 0 256 256"
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#FFE812",
      d: "M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"
    }
  ),
  /* @__PURE__ */ e.createElement("path", { d: "M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z" }),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      fill: "#FFE812",
      d: "M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
    }
  )
);
function Ue({
  supabaseClient: t,
  socialLayout: n = "vertical",
  providers: l = ["github", "google", "azure"],
  providerScopes: o,
  queryParams: r,
  redirectTo: E,
  onlyThirdPartyProviders: h = !0,
  view: w = "sign_in",
  i18n: C,
  appearance: d
}) {
  const [c, a] = u(!1), [m, g] = u(""), y = n === "vertical", i = w === "magic_link" ? "sign_in" : w, b = async (s) => {
    a(!0);
    const { error: x } = await t.auth.signInWithOAuth({
      provider: s,
      options: {
        redirectTo: E,
        scopes: o == null ? void 0 : o[s],
        queryParams: r
      }
    });
    x && g(x.message), a(!1);
  };
  function f(s) {
    return s === "linkedin_oidc" ? "LinkedIn" : s;
  }
  function v(s) {
    const x = s.toLowerCase();
    return s.charAt(0).toUpperCase() + x.slice(1);
  }
  return /* @__PURE__ */ e.createElement(e.Fragment, null, l && l.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(N, { gap: "large", direction: "vertical", appearance: d }, /* @__PURE__ */ e.createElement(
    N,
    {
      direction: y ? "vertical" : "horizontal",
      gap: y ? "small" : "medium",
      appearance: d
    },
    l.map((s) => {
      var x;
      return /* @__PURE__ */ e.createElement(
        O,
        {
          key: s,
          color: "default",
          loading: c,
          onClick: () => b(s),
          appearance: d
        },
        /* @__PURE__ */ e.createElement(Le, { provider: s }),
        y && fe(
          (x = C == null ? void 0 : C[i]) == null ? void 0 : x.social_provider_text,
          {
            provider: v(
              f(s)
            )
          }
        )
      );
    })
  )), !h && /* @__PURE__ */ e.createElement(pe, { appearance: d })));
}
function te({
  authView: t = "sign_in",
  defaultEmail: n = "",
  defaultPassword: l = "",
  setAuthView: o = () => {
  },
  setDefaultEmail: r = (i) => {
  },
  setDefaultPassword: E = (i) => {
  },
  supabaseClient: h,
  showLinks: w = !1,
  redirectTo: C,
  additionalData: d,
  magicLink: c,
  i18n: a,
  appearance: m,
  passwordLimit: g = !1,
  children: y
}) {
  var Z, j, Y, q;
  const i = ue(!0), [b, f] = u(n), [v, s] = u(l), [x, L] = u(""), [D, H] = u(!1), [R, V] = u("");
  U(() => (i.current = !0, f(n), s(l), () => {
    i.current = !1;
  }), [t]);
  const T = async (k) => {
    var K;
    switch (k.preventDefault(), L(""), H(!0), t) {
      case "sign_in":
        const { error: J } = await h.auth.signInWithPassword({
          email: b,
          password: v
        });
        J && L(J.message);
        break;
      case "sign_up":
        if (g && v.length > 72) {
          L("Password exceeds maxmium length of 72 characters");
          return;
        }
        let Q = {
          emailRedirectTo: C
        };
        d && (Q.data = d);
        const {
          data: { user: ie, session: ae },
          error: X
        } = await h.auth.signUp({
          email: b,
          password: v,
          options: Q
        });
        X ? L(X.message) : ie && !ae && V((K = a == null ? void 0 : a.sign_up) == null ? void 0 : K.confirmation_text);
        break;
    }
    i.current && H(!1);
  }, z = (k) => {
    r(b), E(v), o(k);
  }, _ = a == null ? void 0 : a[t];
  return /* @__PURE__ */ e.createElement(
    "form",
    {
      id: t === "sign_in" ? "auth-sign-in" : "auth-sign-up",
      onSubmit: T,
      autoComplete: "on",
      style: { width: "100%" }
    },
    /* @__PURE__ */ e.createElement(N, { direction: "vertical", gap: "large", appearance: m }, /* @__PURE__ */ e.createElement(N, { direction: "vertical", gap: "large", appearance: m }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement($, { htmlFor: "email", appearance: m }, _ == null ? void 0 : _.email_label), /* @__PURE__ */ e.createElement(
      I,
      {
        id: "email",
        type: "email",
        name: "email",
        placeholder: _ == null ? void 0 : _.email_input_placeholder,
        defaultValue: b,
        onChange: (k) => f(k.target.value),
        autoComplete: "email",
        appearance: m
      }
    )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement($, { htmlFor: "password", appearance: m }, _ == null ? void 0 : _.password_label), /* @__PURE__ */ e.createElement(
      I,
      {
        id: "password",
        type: "password",
        name: "password",
        placeholder: _ == null ? void 0 : _.password_input_placeholder,
        defaultValue: v,
        onChange: (k) => s(k.target.value),
        autoComplete: t === "sign_in" ? "current-password" : "new-password",
        appearance: m
      }
    )), y), /* @__PURE__ */ e.createElement(
      O,
      {
        type: "submit",
        color: "primary",
        loading: D,
        appearance: m
      },
      D ? _ == null ? void 0 : _.loading_button_label : _ == null ? void 0 : _.button_label
    ), w && /* @__PURE__ */ e.createElement(N, { direction: "vertical", gap: "small", appearance: m }, t === p.SIGN_IN && c && /* @__PURE__ */ e.createElement(
      B,
      {
        href: "#auth-magic-link",
        onClick: (k) => {
          k.preventDefault(), o(p.MAGIC_LINK);
        },
        appearance: m
      },
      (Z = a == null ? void 0 : a.magic_link) == null ? void 0 : Z.link_text
    ), t === p.SIGN_IN && /* @__PURE__ */ e.createElement(
      B,
      {
        href: "#auth-forgot-password",
        onClick: (k) => {
          k.preventDefault(), o(p.FORGOTTEN_PASSWORD);
        },
        appearance: m
      },
      (j = a == null ? void 0 : a.forgotten_password) == null ? void 0 : j.link_text
    ), t === p.SIGN_IN ? /* @__PURE__ */ e.createElement(
      B,
      {
        href: "#auth-sign-up",
        onClick: (k) => {
          k.preventDefault(), z(p.SIGN_UP);
        },
        appearance: m
      },
      (Y = a == null ? void 0 : a.sign_up) == null ? void 0 : Y.link_text
    ) : /* @__PURE__ */ e.createElement(
      B,
      {
        href: "#auth-sign-in",
        onClick: (k) => {
          k.preventDefault(), z(p.SIGN_IN);
        },
        appearance: m
      },
      (q = a == null ? void 0 : a.sign_in) == null ? void 0 : q.link_text
    ))),
    R && /* @__PURE__ */ e.createElement(F, { appearance: m }, R),
    x && /* @__PURE__ */ e.createElement(F, { color: "danger", appearance: m }, x)
  );
}
function oe({
  setAuthView: t = () => {
  },
  supabaseClient: n,
  redirectTo: l,
  i18n: o,
  appearance: r,
  showLinks: E = !1
}) {
  var b;
  const [h, w] = u(""), [C, d] = u(""), [c, a] = u(""), [m, g] = u(!1), y = async (f) => {
    var s;
    f.preventDefault(), d(""), a(""), g(!0);
    const { error: v } = await n.auth.resetPasswordForEmail(h, {
      redirectTo: l
    });
    v ? d(v.message) : a((s = o == null ? void 0 : o.forgotten_password) == null ? void 0 : s.confirmation_text), g(!1);
  }, i = o == null ? void 0 : o.forgotten_password;
  return /* @__PURE__ */ e.createElement("form", { id: "auth-forgot-password", onSubmit: y }, /* @__PURE__ */ e.createElement(N, { direction: "vertical", gap: "large", appearance: r }, /* @__PURE__ */ e.createElement(N, { gap: "large", direction: "vertical", appearance: r }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement($, { htmlFor: "email", appearance: r }, i == null ? void 0 : i.email_label), /* @__PURE__ */ e.createElement(
    I,
    {
      id: "email",
      name: "email",
      type: "email",
      autoFocus: !0,
      placeholder: i == null ? void 0 : i.email_input_placeholder,
      onChange: (f) => w(f.target.value),
      appearance: r
    }
  )), /* @__PURE__ */ e.createElement(
    O,
    {
      type: "submit",
      color: "primary",
      loading: m,
      appearance: r
    },
    m ? i == null ? void 0 : i.loading_button_label : i == null ? void 0 : i.button_label
  ), E && /* @__PURE__ */ e.createElement(
    B,
    {
      href: "#auth-sign-in",
      onClick: (f) => {
        f.preventDefault(), t(p.SIGN_IN);
      },
      appearance: r
    },
    (b = o == null ? void 0 : o.sign_in) == null ? void 0 : b.link_text
  ), c && /* @__PURE__ */ e.createElement(F, { appearance: r }, c), C && /* @__PURE__ */ e.createElement(F, { color: "danger", appearance: r }, C))));
}
function re({
  supabaseClient: t,
  i18n: n,
  appearance: l,
  passwordLimit: o = !1
}) {
  const [r, E] = u(""), [h, w] = u(""), [C, d] = u(""), [c, a] = u(!1), m = async (y) => {
    var b;
    if (y.preventDefault(), w(""), d(""), a(!0), o && r.length > 72) {
      w("Password exceeds maxmium length of 72 characters"), a(!1);
      return;
    }
    const { error: i } = await t.auth.updateUser({ password: r });
    i ? w(i.message) : d((b = n == null ? void 0 : n.update_password) == null ? void 0 : b.confirmation_text), a(!1);
  }, g = n == null ? void 0 : n.update_password;
  return /* @__PURE__ */ e.createElement("form", { id: "auth-update-password", onSubmit: m }, /* @__PURE__ */ e.createElement(N, { gap: "large", direction: "vertical", appearance: l }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement($, { htmlFor: "password", appearance: l }, g == null ? void 0 : g.password_label), /* @__PURE__ */ e.createElement(
    I,
    {
      id: "password",
      name: "password",
      placeholder: g == null ? void 0 : g.password_input_placeholder,
      type: "password",
      autoFocus: !0,
      onChange: (y) => E(y.target.value),
      appearance: l
    }
  )), /* @__PURE__ */ e.createElement(
    O,
    {
      type: "submit",
      color: "primary",
      loading: c,
      appearance: l
    },
    c ? g == null ? void 0 : g.loading_button_label : g == null ? void 0 : g.button_label
  ), C && /* @__PURE__ */ e.createElement(F, { appearance: l }, C), h && /* @__PURE__ */ e.createElement(F, { color: "danger", appearance: l }, h)));
}
function Te({
  setAuthView: t = () => {
  },
  supabaseClient: n,
  otpType: l = "email",
  i18n: o,
  appearance: r,
  showLinks: E = !1
}) {
  var x;
  const [h, w] = u(""), [C, d] = u(""), [c, a] = u(""), [m, g] = u(""), [y, i] = u(""), [b, f] = u(!1), v = async (L) => {
    L.preventDefault(), g(""), i(""), f(!0);
    let D = {
      email: h,
      token: c,
      type: l
    };
    ["sms", "phone_change"].includes(l) && (D = {
      phone: C,
      token: c,
      type: l
    });
    const { error: H } = await n.auth.verifyOtp(D);
    H && g(H.message), f(!1);
  }, s = o == null ? void 0 : o.verify_otp;
  return /* @__PURE__ */ e.createElement("form", { id: "auth-magic-link", onSubmit: v }, /* @__PURE__ */ e.createElement(N, { gap: "large", direction: "vertical", appearance: r }, ["sms", "phone_change"].includes(l) ? /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement($, { htmlFor: "phone", appearance: r }, s == null ? void 0 : s.phone_input_label), /* @__PURE__ */ e.createElement(
    I,
    {
      id: "phone",
      name: "phone",
      type: "text",
      autoFocus: !0,
      placeholder: s == null ? void 0 : s.phone_input_placeholder,
      onChange: (L) => d(L.target.value),
      appearance: r
    }
  )) : /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement($, { htmlFor: "email", appearance: r }, s == null ? void 0 : s.email_input_label), /* @__PURE__ */ e.createElement(
    I,
    {
      id: "email",
      name: "email",
      type: "email",
      autoFocus: !0,
      placeholder: s == null ? void 0 : s.email_input_placeholder,
      onChange: (L) => w(L.target.value),
      appearance: r
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement($, { htmlFor: "token", appearance: r }, s == null ? void 0 : s.token_input_label), /* @__PURE__ */ e.createElement(
    I,
    {
      id: "token",
      name: "token",
      type: "text",
      placeholder: s == null ? void 0 : s.token_input_placeholder,
      onChange: (L) => a(L.target.value),
      appearance: r
    }
  )), /* @__PURE__ */ e.createElement(
    O,
    {
      color: "primary",
      type: "submit",
      loading: b,
      appearance: r
    },
    b ? s == null ? void 0 : s.loading_button_label : s == null ? void 0 : s.button_label
  ), E && /* @__PURE__ */ e.createElement(
    B,
    {
      href: "#auth-sign-in",
      onClick: (L) => {
        L.preventDefault(), t(p.SIGN_IN);
      },
      appearance: r
    },
    (x = o == null ? void 0 : o.sign_in) == null ? void 0 : x.link_text
  ), y && /* @__PURE__ */ e.createElement(F, { appearance: r }, y), m && /* @__PURE__ */ e.createElement(F, { color: "danger", appearance: r }, m)));
}
const se = me({ user: null, session: null }), Ge = (t) => {
  const { supabaseClient: n } = t, [l, o] = u(null), [r, E] = u((l == null ? void 0 : l.user) ?? null);
  U(() => {
    (async () => {
      var d;
      const { data: C } = await n.auth.getSession();
      o(C.session), E(((d = C.session) == null ? void 0 : d.user) ?? null);
    })();
    const { data: w } = n.auth.onAuthStateChange(
      async (C, d) => {
        o(d), E((d == null ? void 0 : d.user) ?? null);
      }
    );
    return () => {
      w == null || w.subscription.unsubscribe();
    };
  }, []);
  const h = {
    session: l,
    user: r
  };
  return /* @__PURE__ */ e.createElement(se.Provider, { value: h, ...t });
}, We = () => {
  const t = ge(se);
  if (t === void 0)
    throw new Error("useUser must be used within a UserContextProvider.");
  return t;
};
function M({
  supabaseClient: t,
  socialLayout: n = "vertical",
  providers: l,
  providerScopes: o,
  queryParams: r,
  view: E = "sign_in",
  redirectTo: h,
  onlyThirdPartyProviders: w = !1,
  magicLink: C = !1,
  showLinks: d = !0,
  appearance: c,
  theme: a = "default",
  localization: m = { variables: {} },
  otpType: g = "email",
  additionalData: y,
  passwordLimit: i,
  children: b
}) {
  const f = G(_e, m.variables ?? {}), [v, s] = u(E), [x, L] = u(""), [D, H] = u(""), R = v === "sign_in" || v === "sign_up" || v === "magic_link";
  U(() => {
    var z, _;
    ce({
      theme: G(
        ((z = c == null ? void 0 : c.theme) == null ? void 0 : z.default) ?? {},
        ((_ = c == null ? void 0 : c.variables) == null ? void 0 : _.default) ?? {}
      )
    });
  }, [c]);
  const V = ({ children: z }) => {
    var _;
    return (
      // @ts-ignore
      /* @__PURE__ */ e.createElement(
        "div",
        {
          className: a !== "default" ? de(
            G(
              // @ts-ignore
              c == null ? void 0 : c.theme[a],
              ((_ = c == null ? void 0 : c.variables) == null ? void 0 : _[a]) ?? {}
            )
          ) : ""
        },
        R && /* @__PURE__ */ e.createElement(
          Ue,
          {
            appearance: c,
            supabaseClient: t,
            providers: l,
            providerScopes: o,
            queryParams: r,
            socialLayout: n,
            redirectTo: h,
            onlyThirdPartyProviders: w,
            i18n: f,
            view: v
          }
        ),
        !w && z
      )
    );
  };
  U(() => {
    const { data: z } = t.auth.onAuthStateChange(
      (_) => {
        _ === "PASSWORD_RECOVERY" ? s("update_password") : _ === "USER_UPDATED" && s("sign_in");
      }
    );
    return s(E), () => z.subscription.unsubscribe();
  }, [E]);
  const T = {
    supabaseClient: t,
    setAuthView: s,
    defaultEmail: x,
    defaultPassword: D,
    setDefaultEmail: L,
    setDefaultPassword: H,
    redirectTo: h,
    magicLink: C,
    showLinks: d,
    i18n: f,
    appearance: c,
    passwordLimit: i
  };
  switch (v) {
    case p.SIGN_IN:
      return /* @__PURE__ */ e.createElement(V, null, /* @__PURE__ */ e.createElement(te, { ...T, authView: "sign_in" }));
    case p.SIGN_UP:
      return /* @__PURE__ */ e.createElement(V, null, /* @__PURE__ */ e.createElement(
        te,
        {
          appearance: c,
          supabaseClient: t,
          authView: "sign_up",
          setAuthView: s,
          defaultEmail: x,
          defaultPassword: D,
          setDefaultEmail: L,
          setDefaultPassword: H,
          redirectTo: h,
          magicLink: C,
          showLinks: d,
          i18n: f,
          additionalData: y,
          passwordLimit: i,
          children: b
        }
      ));
    case p.FORGOTTEN_PASSWORD:
      return /* @__PURE__ */ e.createElement(V, null, /* @__PURE__ */ e.createElement(
        oe,
        {
          appearance: c,
          supabaseClient: t,
          setAuthView: s,
          redirectTo: h,
          showLinks: d,
          i18n: f
        }
      ));
    case p.MAGIC_LINK:
      return /* @__PURE__ */ e.createElement(V, null, /* @__PURE__ */ e.createElement(
        ne,
        {
          appearance: c,
          supabaseClient: t,
          setAuthView: s,
          redirectTo: h,
          showLinks: d,
          i18n: f
        }
      ));
    case p.UPDATE_PASSWORD:
      return /* @__PURE__ */ e.createElement(
        re,
        {
          appearance: c,
          supabaseClient: t,
          i18n: f,
          passwordLimit: i
        }
      );
    case p.VERIFY_OTP:
      return /* @__PURE__ */ e.createElement(
        Te,
        {
          appearance: c,
          supabaseClient: t,
          otpType: g,
          i18n: f
        }
      );
    default:
      return null;
  }
}
M.ForgottenPassword = oe;
M.UpdatePassword = re;
M.MagicLink = ne;
M.UserContextProvider = Ge;
M.useUser = We;
const Ze = P({
  borderRadius: "12px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  width: "360px",
  padding: "28px 32px"
}), qe = ({
  children: t,
  appearance: n
}) => {
  const l = [
    `${le}_ui-card`,
    Ze(),
    n == null ? void 0 : n.className
  ];
  return /* @__PURE__ */ e.createElement("div", { className: l.join(" ") }, t);
}, Ke = (t) => /* @__PURE__ */ e.createElement(
  M,
  {
    showLinks: !1,
    ...t,
    onlyThirdPartyProviders: !1,
    view: "sign_up"
  }
), Je = (t) => /* @__PURE__ */ e.createElement(
  M,
  {
    showLinks: !1,
    ...t,
    onlyThirdPartyProviders: !1,
    view: "sign_in"
  }
), Qe = (t) => /* @__PURE__ */ e.createElement(M, { ...t, view: "magic_link", showLinks: !1 }), Xe = (t) => /* @__PURE__ */ e.createElement(
  M,
  {
    ...t,
    view: "sign_in",
    showLinks: !1,
    onlyThirdPartyProviders: !0
  }
), et = (t) => /* @__PURE__ */ e.createElement(M, { showLinks: !1, ...t, view: "forgotten_password" }), tt = (t) => /* @__PURE__ */ e.createElement(M, { ...t, view: "update_password" }), lt = (t) => /* @__PURE__ */ e.createElement(M, { ...t, view: "verify_otp" });
export {
  M as Auth,
  qe as AuthCard,
  et as ForgottenPassword,
  Qe as MagicLink,
  Je as SignIn,
  Ke as SignUp,
  Xe as SocialAuth,
  tt as UpdatePassword,
  lt as VerifyOtp
};
