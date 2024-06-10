import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { KeyedMutator } from "swr";
import { facilitySchema, FacilitySchema } from "../../types/FacilitySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog } from "react-aria-components";
import SubmitButton from "../ui/SubmitButton";

const URL = "http://127.0.0.1:8000/api/v1/facility";
type Props = Readonly<{
  close: () => void;
  mutate: KeyedMutator<any>;
}>;

const FacilityCreateForm = ({ close, mutate }: Props) => {
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

    fetch(URL, {
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
          <input type="text" id="nameInput" {...register("name")} />
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

export default FacilityCreateForm;
