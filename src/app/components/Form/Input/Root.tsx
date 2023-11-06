import { ComponentProps } from "react";

export type RootProps = ComponentProps<"div">;

export function Root({ ...props }: RootProps) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
