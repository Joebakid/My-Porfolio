import React from "react";
import Template from "../Template";
import BlogSection from "../BlogBody";

const Blog5 = () => {
  return (
    <div className="container">
      <Template
        title="Making Your Own npm Package"
        alt="Publishing an npm package"
        text="Shipping an npm package is one of the fastest ways to prove real-world impact as a developer. In this guide, we’ll walk through the exact approach we used to build and publish our own CLI, create-bawo-frontend — from idea to npx-ready."
        subtitle1="Why build a package?"
        subtitletext1="Open-source packages showcase your problem-solving, API design, and product thinking. With a polished README and a smooth DX, your package can help thousands (and become a standout portfolio piece). Let’s build one the right way."
        date="August 26, 2025"
      />

      <div className="blog-content">
        <BlogSection
          title="1. Choose a Focused Problem"
          content="Great packages do one job beautifully. For create-bawo-frontend, our goal was simple: scaffold a production-ready React + Vite + Tailwind starter (with optional shadcn/ui) in seconds. Define scope early to avoid scope creep and keep the UX tight."
        />
        <BlogSection
          title="2. Initialize Your Project"
          content={`Create a folder, then run: 
- npm init -y 
- git init 
Add a LICENSE (MIT is popular) and a README skeleton. Decide on ESM or CJS early. If ESM, set "type": "module" in package.json. Keep dependencies slim; prefer devDependencies when possible.`}
        />
        <BlogSection
          title="3. Make It a CLI (Executable)"
          content={`Create a /bin entry file (e.g., src/index.js) and add the shebang at the very top: #!/usr/bin/env node. Then map it in package.json:
{
  "name": "create-bawo-frontend",
  "version": "1.0.0",
  "bin": { "create-bawo-frontend": "dist/index.js" }
}
On Unix, remember to chmod +x dist/index.js so it's executable.`}
        />
        <BlogSection
          title="4. Build the Developer Experience"
          content={`Design prompts and defaults that feel delightful. In our CLI we used small utilities: fs, path, child_process (spawnSync), plus a prompt library. Key DX decisions:
- Sensible defaults (project name, React + Vite + Tailwind)
- Flags like -y for non-interactive mode
- Clear console output and helpful errors
- Live demo commands printed at the end`}
        />
        <BlogSection
          title="5. Ship Real Templates"
          content={`Scaffold actual working code (not just 'Hello World'). For create-bawo-frontend we:
- Wrote a clean folder structure (src/, components/, pages/)
- Included Tailwind config, PostCSS, and basic shadcn/ui setup
- Added scripts: dev, build, preview
- Included a well-commented README inside the template so users know what to do next`}
        />
        <BlogSection
          title="6. Test Locally Like a User"
          content={`Before publishing, simulate real usage:
- npm pack to see what files would ship
- npm link to test globally (run create-bawo-frontend my-app)
- Try npx with a local tarball
- Test on Windows/macOS/Linux (spawnSync on Windows often needs { shell: process.platform === "win32" })`}
        />
        <BlogSection
          title="7. Versioning & Publishing"
          content={`Follow SemVer (MAJOR.MINOR.PATCH). For breaking changes, do: npm version major. Then:
- npm login (enable 2FA for security)
- npm publish --access public
Control what ships using the "files" field or .npmignore. Never commit secrets. If you must pull a bad version, prefer npm deprecate over unpublish (which is restricted).`}
        />
        <BlogSection
          title="8. Make It Discoverable"
          content={`Your README is the landing page. Include:
- What it does (one line)
- Quickstart (copy-pasteable): npx create-bawo-frontend my-app -y
- Options/flags and examples
- Badges (version, downloads, license)
- Links to GitHub issues/discussions
Also add solid keywords in package.json so search works.`}
        />
        <BlogSection
          title="9. Maintain with Confidence"
          content={`Add CI to lint and build. Keep dependencies fresh, respond to issues kindly, and write concise changelogs. For CLI usability, prioritize meaningful error messages and backwards-compatible changes. Consider telemetry opt-in only (if at all), never default.`}
        />
        <BlogSection
          title="10. Reference: Our Package"
          content={`Try it now:
npx create-bawo-frontend my-app -y
or install globally:
npm i -g create-bawo-frontend
Then run:
create-bawo-frontend my-app
This scaffolds a React + Vite + Tailwind starter with clean structure and optional shadcn/ui — exactly how we ship projects quickly.`}
        />
        <BlogSection
          title="Conclusion"
          content="An npm package is a portfolio superpower. Start small, ship fast, polish the DX, document clearly, and iterate. Your future users (and recruiters) will thank you. Now go build something people love — and publish it."
        />
      </div>
    </div>
  );
};

export default Blog5;
