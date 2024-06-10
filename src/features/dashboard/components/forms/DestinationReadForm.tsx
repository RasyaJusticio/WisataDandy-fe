"use client";

import React from "react";
import {
  Button,
  Dialog,
} from "react-aria-components";
import { DestinationObject } from "../..";
import Link from "next/link";
import ImageDisplay from "../ui/ImageDisplay";

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
            value={dataSource?.description || ""}
            readOnly
          ></textarea>
        </div>

        <div className="input-group">
          <label htmlFor="imageInput">Gambar</label>
          {dataSource?.image_url ? (
            <ImageDisplay
              src={`http://127.0.0.1:8000/storage/${dataSource?.image_url}`}
              alt=""
            />
          ) : (
            <input
              type="text"
              value={"Tidak ada gambar"}
              style={{ width: "fit-content" }}
              readOnly
            />
          )}
        </div>

        <div className="actions">
          <Link
            target="_blank"
            href={`/destinasi/${dataSource?.slug}`}
            rel="noopener noreferer"
            className="cancel"
            style={{ marginRight: "auto" }}
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
