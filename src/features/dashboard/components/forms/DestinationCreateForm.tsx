"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Button, Dialog } from "react-aria-components";
import { useForm } from "react-hook-form";
import { KeyedMutator } from "swr";
import {
  destinationSchema,
  DestinationSchema,
} from "../../types/DestinationSchema";

const URL = "http://127.0.0.1:8000/api/v1/destination";

type Props = Readonly<{
  close: () => void;
  mutate: KeyedMutator<any>;
}>;

const DestinationCreateForm = ({ close, mutate }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DestinationSchema>({
    resolver: zodResolver(destinationSchema),
  });

  const onSubmit = (data: DestinationSchema) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("slug", data.slug);
    formData.append("address", data.address);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    fetch(URL, {
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
          <input type="text" id="nameInput" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>

        <div className="input-group">
          <label htmlFor="slugInput">Slug</label>
          <input type="text" id="slugInput" {...register("slug")} />
          <p>{errors.slug?.message}</p>
        </div>

        <div className="input-group">
          <label htmlFor="addressInput">Alamat</label>
          <input type="text" id="addressInput" {...register("address")} />
          <p>{errors.address?.message}</p>
        </div>

        <div className="input-group">
          <label htmlFor="descriptionInput">Deskripsi</label>
          <textarea
            id="descriptionInput"
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

export default DestinationCreateForm;
