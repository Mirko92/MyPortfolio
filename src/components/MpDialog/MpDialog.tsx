"use client"

import { PropsWithChildren, useEffect, useRef } from "react";

import "./MpDialog.css";
import { createPortal } from "react-dom";

type MpDialogProps = {
  show: boolean;

  title?: string;
};

export function MpDialog({ show, title, children }: PropsWithChildren<MpDialogProps>) {
  const _dialogRef = useRef<HTMLDialogElement>(null);

  function close() {
    _dialogRef.current?.close();
  }

  function display() {
    _dialogRef.current?.showModal();
  }

  useEffect(() => {
    show ? display() : close();
  }, [show]);

  return createPortal(
    <dialog
      ref={_dialogRef}
      className="mp-dialog"
    >
      <header className="flex justify-between mb-4">
        {title}

        <button
          className="ml-auto"
          onClick={close}
        >
          &times;
        </button>
      </header>

      { children }
    </dialog>,
    document.body
  );
}
