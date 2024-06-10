"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { useForm } from "react-hook-form";
import { KeyedMutator } from "swr";
import {
  DestinationSchema,
  destinationSchema,
} from "../../types/DestinationSchema";
import DestinationObject from "../../types/DestinationObject";
import { PiX } from "react-icons/pi";
import Image from "next/image";

const URL = "http://127.0.0.1:8000/api/v1/destination";

type Props = Readonly<{
  dataSource: DestinationObject | null | undefined;
  close: () => void;
  mutate: KeyedMutator<any>;
}>;

const DestinationUpdateForm = ({ dataSource, close, mutate }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DestinationSchema>({
    resolver: zodResolver(destinationSchema),
  });

  const onSubmit = (data: DestinationSchema) => {
    const formData = new FormData();

    if (data.name !== dataSource?.name) {
      formData.append("name", data.name);
    }
    if (data.slug !== dataSource?.slug) {
      formData.append("slug", data.slug);
    }
    if (data.address !== dataSource?.address) {
      formData.append("address", data.address);
    }
    if (data.description !== dataSource?.description) {
      formData.append("description", data.description);
    }
    if (data.image) {
      formData.append("image", data.image[0]);
    }

    fetch(`${URL}/${dataSource?.id}`, {
      method: "POST",
      body: formData,
      headers: {
        accept: "application/json",
      },
    }).then(() => {
      mutate();
      close();
    });
  };

  return (
    <Dialog className="outline-none">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="nameInput">Nama</label>
          <input
            type="text"
            id="nameInput"
            defaultValue={dataSource?.name}
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className="input-group">
          <label htmlFor="slugInput">Slug</label>
          <input
            type="text"
            id="slugInput"
            defaultValue={dataSource?.slug}
            {...register("slug")}
          />
          <p>{errors.slug?.message}</p>
        </div>

        <div className="input-group">
          <label htmlFor="addressInput">Alamat</label>
          <input
            type="text"
            id="addressInput"
            defaultValue={dataSource?.address}
            {...register("address")}
          />
          <p>{errors.address?.message}</p>
        </div>

        <div className="input-group">
          <label htmlFor="descriptionInput">Deskripsi</label>
          <textarea
            id="descriptionInput"
            defaultValue={dataSource?.description || ""}
            {...register("description")}
          ></textarea>
          <p>{errors.description?.message}</p>
        </div>

        <div className="input-group">
          <label htmlFor="imageInput">Gambar</label>
          <label className="upload-file">
            Upload File
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp,.jfif"
              id="imageInput"
              {...register("image")}
            />
          </label>
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
          <p>{errors.image?.message as string}</p>
        </div>

        <div className="actions">
          <Button type="reset" className="cancel" onPress={close}>
            Batal
          </Button>
          <Button type="submit" className="ok">
            Selesai
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default DestinationUpdateForm;
