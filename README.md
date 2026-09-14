# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📝 Blog-CMS (Sveltia CMS)

Blogartikel lassen sich unter `/admin/` ohne Code-Zugriff pflegen ([Sveltia CMS](https://sveltiacms.app/en/), Nachfolger von Netlify/Decap CMS). Konfiguration: `public/admin/config.yml`. Direkt-Veröffentlichung, kein Freigabe-Workflow.

**Backend:** GitHub-Repo direkt, Authentifizierung über Netlifys eingebauten OAuth-Vermittler (`api.netlify.com`) – **kein** Netlify Identity/Git Gateway (deprecated) und kein selbst gehosteter OAuth-Proxy nötig, solange die Seite auf Netlify liegt.

### Einmalige Einrichtung

1. **GitHub OAuth App registrieren:** GitHub → Settings → Developer settings → OAuth Apps → New OAuth App.
   - Homepage URL: `https://rae-vp.de`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Client ID und Client Secret notieren.
2. **In Netlify hinterlegen:** Netlify-Dashboard → dieses Site → Site configuration → Access control → OAuth → "Install provider" → GitHub → Client ID + Secret eintragen.
3. **Redakteur-Zugang:** Person auf GitHub als Collaborator zum Repo hinzufügen (Settings → Collaborators → Add people) mit Rolle **Write**. Das genügt für dieses eine Repo, ohne Zugriff auf andere Bereiche des Accounts.

Danach unter `https://rae-vp.de/admin/` mit "Login with GitHub" anmelden.

Wenn die Sveltia-CMS-Version aktualisiert werden soll: Versionsnummer in `public/admin/index.html` (jsDelivr-URL) anpassen.
