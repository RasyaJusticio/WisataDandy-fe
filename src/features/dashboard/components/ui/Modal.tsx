"use client";

import React, { ReactNode } from "react";
import { Dialog, Modal } from "react-aria-components";

type Props = Readonly<{
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  children?: (props: {
    close: () => void;
  }) => ReactNode | (() => ReactNode) | ReactNode;
}>;

const MyModal = ({ isOpen, setOpen, children }: Props) => {
  const close = () => {
    setOpen(false);
  };

  return (
    <Modal isDismissable isOpen={isOpen} onOpenChange={setOpen}>
      <Dialog className="w-full md:w-fit mt-auto md:m-auto p-3 bg-tertiary border-2 rounded-t-md md:rounded-md border-border outline-none shadow-md pointer-events-auto">
        {typeof children === "function" ? children({ close }) : children}
      </Dialog>
    </Modal>
  );
};

export default MyModal;
