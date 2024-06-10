"use client";

import React, { FormEvent, useState } from "react";
import { Button, Dialog } from "react-aria-components";
import { KeyedMutator } from "swr";
import SubmitButton from "../ui/SubmitButton";

const URL = "http://127.0.0.1:8000/api/v1/destination";

type Props = Readonly<{
  dataSource: number;
  close: () => void;
  mutate: KeyedMutator<any>;
}>;

const DestinationDeleteForm = ({ dataSource, mutate, close }: Props) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setLoading(true);

    fetch(`${URL}/${dataSource}`, {
      method: "DELETE",
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

  return (
    <Dialog className="outline-none">
      <form className="form" onSubmit={onSubmit}>
        <p className="max-w-96">
          Apakah Anda yakin ingin menghapus destinasi ini? Tindakan ini tidak
          dapat dibatalkan.
        </p>
        <div className="actions">
          <Button className="cancel" onPress={close} isDisabled={isLoading}>
            Batal
          </Button>
          <SubmitButton type="submit" color="danger" loading={isLoading}>
            Hapus
          </SubmitButton>
        </div>
      </form>
    </Dialog>
  );
};

export default DestinationDeleteForm;
