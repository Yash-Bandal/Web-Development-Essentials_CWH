# Vue 3 Project Setup — Quick Reference

## 1. Prerequisites

Install **Node.js (LTS)** and npm.

Verify installation:

```bash
node -v
npm -v
```

## 2. Create a Vue 3 Project

Open the terminal in the parent directory where you want to create your project.

```bash
npm create vue@latest
```

Alternatively, create the project inside the current empty folder:

```bash
npm create vue@latest .
```

### Recommended Setup Options

| Prompt | Selection |
|---|---|
| Project name | Your project name, e.g. `my-app` |
| TypeScript | Yes |
| JSX Support | No |
| Vue Router | Yes |
| Pinia | Yes |
| Vitest | No, initially |
| End-to-End Testing | No, initially |
| ESLint | Yes |
| Prettier | Yes |
| Skip example code | Yes |

*Prompts may vary slightly between Vue scaffolder versions.*

**Important:** If using `npm create vue@latest .`, ensure the current folder is empty or contains only files you intend to keep.

## 3. Install Dependencies

If the scaffolder has not already installed them:

```bash
npm install
```

Install Vuetify and Material Design Icons:

```bash
npm install vuetify @mdi/font
```

Install the Vuetify Vite plugin:

```bash
npm install -D vite-plugin-vuetify
```

Use the Vuetify version compatible with your Vue version and project requirements.

## 4. Run the Project

```bash
npm run dev
```

Open the local URL printed in the terminal.

Stop the development server with:

```text
Ctrl + C
```

## 5. Useful Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build production files |
| `npm run type-check` | Check TypeScript, if configured |
| `npm run lint` | Check code quality, if configured |
| `npm run format` | Format files, if configured |
| `npm install package-name` | Install a dependency |
| `npm uninstall package-name` | Remove a dependency |
| `npm list --depth=0` | List installed top-level packages |

Available scripts depend on the generated `package.json`.

## 6. Typical Project Structure

```text
my-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── router/
│   ├── stores/
│   ├── services/
│   ├── types/
│   ├── plugins/
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

Add folders only when required by your application.

## 7. What Each Technology Does

- **Vue 3:** Build reactive user interfaces.
- **TypeScript:** Add static type checking.
- **Vue Router:** Navigate between pages.
- **Pinia:** Manage shared application state.
- **Vuetify:** Use ready-made UI components and responsive layouts.
- **Axios (optional):** Make HTTP requests to backend APIs.
- **Vite:** Run the development server and build the application.
- **ESLint:** Identify common code problems.
- **Prettier:** Format code consistently.

### Next Steps After Setup

1. Configure Vuetify in `src/plugins/vuetify.ts`.
2. Register Vuetify in `src/main.ts`.
3. Verify that a Vuetify component renders.
4. Define the required routes.
5. Design the component structure.
6. Define TypeScript interfaces.
7. Add API services and Pinia stores as needed.
8. Implement and test pages one at a time.

