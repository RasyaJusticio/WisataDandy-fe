import { z } from "zod";

const facilitySchema = z.object({
  name: z
    .string({
      required_error: "Nama diperlukan",
      invalid_type_error: "Nama harus berupa teks",
    })
    .min(3, "Nama harus mempunyai minimal 3 karakter")
    .max(64, "Maksimal panjang nama adalah 64 karakter"),
});

type FacilitySchema = z.infer<typeof facilitySchema>;

export { facilitySchema };
export type { FacilitySchema };