

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.32ca2e0e.js","_app/immutable/chunks/index.6dba6488.js"];
export const stylesheets = ["_app/immutable/assets/0.362bd3d7.css"];
export const fonts = [];
