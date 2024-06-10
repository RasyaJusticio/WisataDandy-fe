export default interface DestinationObject {
  id: number;
  name: string;
  slug: string;
  address: string;
  description: string;
  image: File | null | undefined;
  image_url: string;
}
