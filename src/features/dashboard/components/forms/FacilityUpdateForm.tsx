import React, { useState } from "react";
import { KeyedMutator } from "swr";
import { FacilityObject, facilitySchema, FacilitySchema } from "../..";
import { Button, Dialog } from "react-aria-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../ui/SubmitButton";

const URL = "http://127.0.0.1:8000/api/v1/facility";
type Props = Readonly<{
  dataSource: FacilityObject | null | undefined;
  close: () => void;
  mutate: KeyedMutator<any>;
}>;

const FacilityUpdateForm = ({ dataSource, close, mutate }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FacilitySchema>({
    resolver: zodResolver(facilitySchema),
  });

  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = (data: FacilitySchema) => {
    setLoading(true);

    fetch(`${URL}/${dataSource?.id}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
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

export default FacilityUpdateForm;
