"use client";

import React from "react";
import { Button, Dialog } from "react-aria-components";
import { Row } from "../ui/Table";

type Props = Readonly<{
  dataSource: Row | null | undefined;
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
          <a
            href={`http://127.0.0.1:8000/storage/${dataSource?.image_url}`}
            type="button"
          >
            Lihat Gambar
          </a>
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

export default DestinationReadForm;
