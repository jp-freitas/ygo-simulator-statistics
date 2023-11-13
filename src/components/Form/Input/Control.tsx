import { ComponentProps } from "react";

export type ControlProps = ComponentProps<"input">;

export function Control({ ...props }: ControlProps) {
  return (
    <input
      className="w-10/12 flex-1 border-0 outline-none bg-transparent p-0 text-zinc-900 placeholder:capitalize placeholder:text-zinc-600"
      type="text"
      {...props}
    />
  );
}
