import { LogOut } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <Image
        src={"https://github.com/jp-freitas.png"}
        width={40}
        height={40}
        alt="user profile picture"
        className="rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">João Pedro</span>
        <span className="text-sm truncate text-zinc-500">
          tec.joao.freitas@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
}
