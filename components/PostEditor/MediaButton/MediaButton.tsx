import React from "react";
import { Button } from "../../UI/Button/Button";
import { UISvgSelector } from "../../UI/UISvgSelector";

type Props = {
  icon: string;
  onClick: () => void;
};

export default function MediaButton({ icon, onClick }: Props) {
  return (
    <Button onClick={onClick} type="small">
      <UISvgSelector id={icon} />
    </Button>
  );
}
