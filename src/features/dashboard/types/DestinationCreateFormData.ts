import { z } from "zod";

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/jfif",
];

export const DestinationCreateSchema = z.object({
  name: z
    .string({
      required_error: "Nama diperlukan",
      invalid_type_error: "Nama harus berupa teks",
    })
    .min(3, "Nama harus mempunyai minimal 3 karakter")
    .max(64, "Maksimal panjang nama adalah 64 karakter"),
  slug: z
    .string({
      required_error: "Slug diperlukan",
      invalid_type_error: "Slug harus berupa teks",
    })
    .min(3, "Slug harus mempunyai minimal 1 karakter")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug harus menggunakan huruf kecil, boleh mengandung angka, tanda hubung (-)"
    ),
  address: z
    .string()
    .min(3, "Alamat harus mempunyai minimal 3 karakter")
    .max(255, "Maksimal panjang alamat adalah 255 karakter"),
  description: z
    .string()
    .max(255, "Maksimal panjang alamat adalah 255 karakter"),
  image: z
    .any()
    .refine((file) => {
      if (!file || !file[0]) {
        return true;
      }

      return file[0].size <= MAX_FILE_SIZE;
    }, "Besar maksimal gambar adalah 2MB")
    .refine((file) => {
      if (!file || !file[0]) {
        return true;
      }

      return ACCEPTED_IMAGE_TYPES.includes(file[0].type);
    }, "Hanya .jpg, .jpeg, .png and .webp format yang diperbolehkan"),
});

export type DestinationCreateFormData = z.infer<typeof DestinationCreateSchema>;
