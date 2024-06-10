import React, { FormEvent, useState } from "react";
import { KeyedMutator } from "swr";
import { FacilityObject } from "../..";
import { Button, Dialog } from "react-aria-components";
import SubmitButton from "../ui/SubmitButton";

const URL = "http://127.0.0.1:8000/api/v1/facility";
type Props = Readonly<{
  dataSource: number;
  close: () => void;
  mutate: KeyedMutator<any>;
}>;

const FacilityDeleteForm = ({ dataSource, close, mutate }: Props) => {
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
          Apakah Anda yakin ingin menghapus fasilitas ini? Tindakan ini tidak
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

export default FacilityDeleteForm;
