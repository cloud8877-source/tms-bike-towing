import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['tests/unit/**/*.test.ts'],
    reporters: ['verbose', 'html'],
    outputFile: {
      html: './reports/vitest-report.html',
    },
  },
});
