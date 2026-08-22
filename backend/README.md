# LUMI Cloud Backend

Secure gateway for LUMI Online.

## Responsibilities
- Keeps the OpenRouter secret off the browser.
- Rate-limits AI requests.
- Restricts message size/history.
- Provides a health endpoint.
- Verifies Supabase bearer sessions for cloud profile access.

## Run locally

```bash
cd backend
npm install
copy .env.example .env
npm start
```

Never commit `.env`, API keys, or Supabase service-role credentials.

## Required environment
- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL`
- `CORS_ORIGINS`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

The service-role key is backend-only and must never be exposed to LUMI's frontend.