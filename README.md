# Next.js-prosjekt med Supabase-autentisering og OpenAI Chatbot

Dette er et Next.js-prosjekt hvor jeg bruker **Supabase** for autentisering og planlegger å integrere en **chatbot** ved hjelp av OpenAI API.

## Funksjoner

- **Autentisering med Supabase**: Brukere kan registrere seg og logge inn sikkert.
- **Brukerprofiler**: Viser brukernavn og profilbilde fra Supabase.
- **Filopplasting**: Brukere kan laste opp bilder og lagre dem i Supabase-lagring.
- **Chatbot (under utvikling)**: En AI-basert chatbot ved hjelp av OpenAI API.

## Teknologier

- [Next.js](https://nextjs.org/) – React-rammeverk for frontend
- [Supabase](https://supabase.com/) – Backend for autentisering og database
- [OpenAI API](https://openai.com/) – For å lage chatboten
- [TypeScript](https://www.typescriptlang.org/) – For bedre kodekvalitet
- [Auth0](https://auth0.com/) – Brukes for ekstra autentisering

## Installasjon

1. **Klon repoet:**
   ```sh
   git clone https://github.com/ditt-brukernavn/prosjekt.git
   cd prosjekt
2. **Installer Avhengigheter:**
    npm install
3. **Konfigurer miljøvariabler:**
    *Opprett en .env.local-fil og legg til:*
    NEXT_PUBLIC_SUPABASE_URL=din_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=din_supabase_anon_nøkkel
    OPENAI_API_KEY=din_openai_api_nøkkel
4. **Start Prosjektet:**
    npm run dev