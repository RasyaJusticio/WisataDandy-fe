"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Button, Dialog } from "react-aria-components";
import { useForm } from "react-hook-form";
import {
  DestinationCreateFormData,
  DestinationCreateSchema,
} from "../../types/DestinationCreateFormData";

const DestinationCreateForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DestinationCreateFormData>({
    resolver: zodResolver(DestinationCreateSchema),
  });

  const onSubmit = (data: DestinationCreateFormData) => {
    console.log(data);
  };

  return (
    <Dialog>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.webp,.jfif"
            id="imageInput"
            {...register("image")}
          />
          <p>{errors.image?.message as string}</p>
        </div>

        <div className="flex">
          <Button type="reset">Batal</Button>
          <Button type="submit">Selesai</Button>
        </div>
      </form>
    </Dialog>
  );
};

export default DestinationCreateForm;
