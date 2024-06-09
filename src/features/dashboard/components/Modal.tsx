"use client";

import React from "react";
import { Dialog, Modal } from "react-aria-components";

type Props = Readonly<{
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}>;

const MyModal = ({ isOpen, setOpen }: Props) => {
  return (
    <Modal
      isDismissable
      className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] grid place-items-center z-[100]"
      isOpen={isOpen}
      onOpenChange={setOpen}
    >
      <Dialog>asdfasdfa</Dialog>
    </Modal>
  );
};

export default MyModal;
