const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/jfif",
];

export const convertFileToSrc = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_FILE_SIZE) {
      reject(new Error("File is too big. Maximal is 2MB"));
    }

    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      reject(new Error("File type are invalid"));
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result as string);
      } else {
        reject(new Error("Failed to read file"));
      }
    };
    reader.onerror = () => {
      reject(new Error("File reading error"));
    };
    reader.readAsDataURL(file);
  });
};
