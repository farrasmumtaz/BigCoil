import { diskStorage } from 'multer';
import { extname, join } from 'path';
import * as fs from 'fs';

const prefixes: Record<string, string> = {
  company: 'logo',
  hero: 'hero',
  collection: 'collect',
  technology: 'technology',
  'dream-better': 'healthy',
  testimonial: 'testimonial',
};

export const storage = diskStorage({
  destination(req, file, cb) {
    const folder = req.params.folder;

    if (!folder || !(folder in prefixes)) {
      return cb(new Error('Invalid upload folder'), '');
    }

    const uploadPath = join(process.cwd(), 'uploads', folder);

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, {
        recursive: true,
      });
    }

    cb(null, uploadPath);
  },

  filename(req, file, cb) {
    const folder = req.params.folder;

    if (!folder || !(folder in prefixes)) {
      return cb(new Error('Invalid upload folder'), '');
    }

    const prefix = prefixes[folder];

    const filename = `${prefix}-${Date.now()}${extname(
      file.originalname,
    ).toLowerCase()}`;

    cb(null, filename);
  },
});
