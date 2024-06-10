"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { Button, Dialog } from "react-aria-components";
import { useForm } from "react-hook-form";
import { KeyedMutator } from "swr";
import {
  destinationSchema,
  DestinationSchema,
} from "../../types/DestinationSchema";
import ImageDisplay from "../ui/ImageDisplay";
import { convertFileToSrc } from "../../utils/convertFileToSrc";
import SubmitButton from "../ui/SubmitButton";

const URL = "http://127.0.0.1:8000/api/v1/destination";

type Props = Readonly<{
  close: () => void;
  mutate: KeyedMutator<any>;
}>;

const DestinationCreateForm = ({ close, mutate }: Props) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DestinationSchema>({
    resolver: zodResolver(destinationSchema),
  });

  const [isLoading, setLoading] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  const watchFile = watch("image", []);

  const onSubmit = (data: DestinationSchema) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("slug", data.slug);
    formData.append("address", data.address);

    if (data?.description) {
      formData.append("description", data.description);
    }

    if (data?.image?.length > 0) {
      formData.append("image", data.image[0]);
    }

    fetch(URL, {
      method: "POST",
      body: formData,
      headers: {
        accept: "application/json",
      },
    })
      .then(() => {
        mutate();
        close();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (watchFile && watchFile[0]) {
      const file: File = watchFile[0];

      convertFileToSrc(file)
        .then((result) => setImageSrc(result))
        .catch((error) => {
          console.warn(error);
          setValue("image", null);
          setImageSrc("");
        });
    }
  }, [watchFile]);

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
          <div className="flex gap-2">
            <label className="upload-file">
              Upload Gambar
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp,.jfif"
                id="imageInput"
                {...register("image")}
              />
            </label>
            {imageSrc.trim() !== "" && (
              <ImageDisplay src={`${imageSrc}`} alt="" />
            )}
          </div>
          <p>{errors.image?.message as string}</p>
        </div>

        <div className="actions">
          <Button
            type="reset"
            className="cancel"
            onPress={close}
            isDisabled={isLoading}
          >
            Batal
          </Button>
          <SubmitButton type="submit" loading={isLoading}>
            Selesai
          </SubmitButton>
        </div>
      </form>
    </Dialog>
  );
};

export default DestinationCreateForm;
