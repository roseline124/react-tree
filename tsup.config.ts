import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  target: 'es2022',
  external: ['react', 'react-dom'],
  outDir: 'dist',
  // Keep CSS as-is so consumers can import it
  loader: { '.css': 'copy' },
});
