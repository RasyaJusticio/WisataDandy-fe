"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Dialog, Modal } from "react-aria-components";

type Props = Readonly<{
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}>;

const MyModal = ({ isOpen, setOpen }: Props) => {
  return (
    <Modal isDismissable isOpen={isOpen} onOpenChange={setOpen}>
      <Dialog></Dialog>
    </Modal>
  );
};

export default MyModal;
