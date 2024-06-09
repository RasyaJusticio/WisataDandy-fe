"use client";

import React, { FormEvent } from "react";
import { Button, Dialog } from "react-aria-components";
import { KeyedMutator } from "swr";

const URL = "http://127.0.0.1:8000/api/v1/destination";

type Props = Readonly<{
  dataSource: number;
  close: () => void;
  mutate: KeyedMutator<any>;
}>;

const DestinationDeleteForm = ({ dataSource, mutate, close }: Props) => {
  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    fetch(`${URL}/${dataSource}`, {
      method: "DELETE",
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
      <form className="form" onSubmit={onSubmit}>
        <p className="max-w-96">
          Apakah Anda yakin ingin menghapus destinasi ini? Tindakan ini tidak
          dapat dibatalkan.
        </p>
        <div className="actions">
          <Button className="cancel" onPress={close}>
            Batal
          </Button>
          <Button type="submit" className="ok-danger">
            Hapus
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default DestinationDeleteForm;
