const fs = require('fs');
const path = require('path');
const { ZipArchive } = require('archiver');

const outputDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'shamim-tech-solution-source.zip');
const output = fs.createWriteStream(outputPath);
const archive = new ZipArchive({ zlib: { level: 9 } });

output.on('close', () => {
  console.log(`Successfully generated ${outputPath} (${(archive.pointer() / 1024 / 1024).toFixed(2)} MB)`);
});

archive.on('error', (err) => {
  console.error('Error archiving:', err);
  process.exit(1);
});

archive.pipe(output);

const rootDir = path.join(__dirname, '..');
archive.glob('**/*', {
  cwd: rootDir,
  ignore: [
    'node_modules/**',
    '.git/**',
    'dist/**',
    '.aistudio/**',
    'public/shamim-tech-solution-source.zip',
    '*.zip'
  ],
  dot: true
});

archive.finalize();
