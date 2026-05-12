## Goal
Wire the existing contact form on the homepage to EmailJS so submissions actually email you, using the credentials you provided.

## Credentials (will be hardcoded — they are public-safe by EmailJS design)
- Public Key: `u3QvI8HinEt57bz2w`
- Service ID: `service_dw1u0nh`
- Template ID: `template_u37iphb`

## Steps
1. Install `@emailjs/browser` package.
2. Update the `Contact` component in `src/routes/index.tsx`:
   - Add a `name` input field (in addition to existing email + message), since most EmailJS templates expect `from_name`, `from_email`, `message`.
   - Initialize EmailJS with the public key.
   - On submit: call `emailjs.send(serviceId, templateId, { from_name, from_email, message })`.
   - Show loading state on the button while sending.
   - Toast success on resolve, toast error on rejection (instead of always showing success).
   - Reset the form only on success.
3. Keep all existing styling, layout, and the futuristic theme untouched.

## Notes
- EmailJS public keys are designed to be exposed client-side, so no secret/env setup is needed.
- Make sure your EmailJS template variables are named `from_name`, `from_email`, and `message`. If yours use different names, tell me and I'll adjust.
