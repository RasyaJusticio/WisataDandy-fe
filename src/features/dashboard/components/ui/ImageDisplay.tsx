import Image from "next/image";
import React from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { PiX } from "react-icons/pi";

type Props = Readonly<{
  src: string;
  alt: string;
}>;

const ImageDisplay = ({ src, alt }: Props) => {
  return (
    <DialogTrigger>
      <Button className="w-fit px-3 py-1.5 rounded-md transition-colors bg-accent-600 hover:bg-accent-700">
        Lihat Gambar
      </Button>
      <ModalOverlay>
        <Modal isDismissable>
          <Dialog className="w-full md:w-fit m-auto p-3 bg-tertiary border-2 rounded-md border-border outline-none shadow-md pointer-events-auto">
            {({ close }) => (
              <div className="flex flex-col gap-2 items-center">
                <div className="flex w-full items-center">
                  <Heading slot="title">Lihat Gambar</Heading>
                  <Button className="ml-auto" onPress={close}>
                    <PiX />
                  </Button>
                </div>
                <div className="flex w-full md:w-96">
                  <Image
                    className="!relative !h-fit"
                    src={src}
                    alt={alt}
                    fill
                  />
                </div>
              </div>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default ImageDisplay;
