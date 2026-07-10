import { diskStorage } from 'multer';
import { extname, join } from 'path';
import * as fs from 'fs';

import { uploadFolders } from './utils/upload-folder';

export const storage = diskStorage({
  destination(req, file, cb) {
    const folder = req.params.folder;

    if (!folder || !(folder in uploadFolders)) {
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

    const filename = `${folder}-${Date.now()}${extname(
      file.originalname,
    ).toLowerCase()}`;

    cb(null, filename);
  },
});
