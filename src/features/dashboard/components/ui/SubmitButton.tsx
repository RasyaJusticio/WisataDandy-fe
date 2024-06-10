import React, { ReactNode } from "react";
import { Button, PressEvent } from "react-aria-components";
import { PiCircleNotch } from "react-icons/pi";

type Props = Readonly<{
  type?: "button" | "reset" | "submit" | undefined;
  variant?: "outlined" | "filled";
  color?: "normal" | "danger";
  onPress?: (e: PressEvent) => void;
  loading?: boolean;
  children?: ReactNode;
}>;

const SubmitButton = ({
  type = "button",
  variant = "filled",
  color = "normal",
  onPress,
  loading = false,
  children,
}: Props) => {
  const getStyle = () => {
    let style = "px-3 py-1.5 rounded-md transition-colors";
    const colorName = { bg: "", bgHover: "", border: "", borderHover: "" };

    switch (color) {
      case "normal":
        colorName.bg = "bg-accent-600";
        colorName.bgHover = "hover:bg-accent-700";
        colorName.border = "border-accent-600";
        colorName.borderHover = "hover:border-accent-700";
        break;
      case "danger":
        colorName.bg = "bg-red-600";
        colorName.bgHover = "hover:bg-red-700";
        colorName.border = "border-red-600";
        colorName.borderHover = "hover:border-red-700";
        break;
    }

    switch (variant) {
      case "filled":
        style = `${style} ${colorName.bg} ${colorName.bgHover}`; // "border-2 border-accent-600 hover:border-accent-700"
        break;
      case "outlined":
        style = `${style} border-2 bg-tertiary ${colorName.border} ${colorName.borderHover}`;
        break;
    }

    return style;
  };

  const handleOnPress = (ev: PressEvent) => {
    if (!loading && onPress) {
      onPress(ev);
    }
  };

  return (
    <Button
      type={!loading ? type : "button"}
      className={`relative ${getStyle()}`}
      onPress={handleOnPress}
    >
      {children}

      {loading && (
        <div
          className={`absolute size-full grid place-items-center top-0 left-0 border-0 ${getStyle()}`}
        >
          <PiCircleNotch className="animate-spin text-2xl" />
        </div>
      )}
    </Button>
  );
};

export default SubmitButton;
