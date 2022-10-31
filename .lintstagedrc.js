module.exports = {
  '{!(**/__mocks__/**)/!(*.spec).ts,*.js}': codeFiles =>
    `eslint -c .eslintrc.js --no-ignore --fix --max-warnings 0 ${codeFiles.join(
      ' ',
    )}`,
  '*.spec.ts': testFiles =>
    `eslint -c .eslintrc.js --no-ignore --fix --max-warnings 0 ${testFiles.join(
      ' ',
    )}`,
  '**/__mocks__/**/*.{js,ts}': mockFiles =>
    `prettier --write --loglevel=silent ${mockFiles.join(' ')}`,
  '*.md': mdFiles => mdFiles.map(mdFile => `remark ${mdFile} --output`),
};
