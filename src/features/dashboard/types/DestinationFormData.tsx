export default interface DestinationReadFormData {
  name: string;
  slug: string;
  address: string;
  description: string;
  image: File | null | undefined;
}
