"use client";

import React from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { DestinationObject } from "../..";
import Image from "next/image";
import Link from "next/link";
import { PiX } from "react-icons/pi";

type Props = Readonly<{
  dataSource: DestinationObject | null | undefined;
  close: () => void;
}>;

const DestinationReadForm = ({ dataSource, close }: Props) => {
  return (
    <Dialog className="outline-none">
      <form className="form" onSubmit={close}>
        <div className="input-group">
          <label htmlFor="nameInput">Nama</label>
          <input type="text" id="nameInput" value={dataSource?.name} readOnly />
        </div>

        <div className="input-group">
          <label htmlFor="slugInput">Slug</label>
          <input type="text" id="slugInput" value={dataSource?.slug} readOnly />
        </div>

        <div className="input-group">
          <label htmlFor="addressInput">Alamat</label>
          <input
            type="text"
            id="addressInput"
            value={dataSource?.address}
            readOnly
          />
        </div>

        <div className="input-group">
          <label htmlFor="descriptionInput">Deskripsi</label>
          <textarea
            id="descriptionInput"
            value={dataSource?.description}
            readOnly
          ></textarea>
        </div>

        <div className="input-group">
          <label htmlFor="imageInput">Gambar</label>
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
                          src={`http://127.0.0.1:8000/storage/${
                            dataSource?.image_url || ""
                          }`}
                          alt=""
                          fill
                        />
                      </div>
                    </div>
                  )}
                </Dialog>
              </Modal>
            </ModalOverlay>
          </DialogTrigger>
        </div>

        <div className="actions">
          <Link
            target="_blank"
            href={`/destinasi/${dataSource?.slug}`}
            rel="noopener noreferer"
            className="cancel"
          >
            Lihat Halaman
          </Link>
          <Button type="reset" className="cancel" onPress={close}>
            Kembali
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default DestinationReadForm;
