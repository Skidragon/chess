// Example: snowpack.config.mjs
// The added "@type" comment will enable TypeScript type information via VSCode, etc.

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  plugins: [
    //   https://www.npmjs.com/package/@snowpack/plugin-typescript
    [
      "@snowpack/plugin-typescript",
      {
        args: "./src/**",
      },
    ],
    [
      //  https://www.npmjs.com/package/@snowpack/plugin-sass
      "@snowpack/plugin-sass",
      {
        loadPath: "./src/**",
        sourceMap: true,
      },
    ],
  ],
};
