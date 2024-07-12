import { CircleCheck } from "lucide-react";
import React from "react";

export function Activities() {
  return (
    <div className="space-y-8">
      {/*Dias*/}
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
          <span className="text-sx text-zinc-500">Sábado</span>
        </div>
        <p className="text-zinc-500 font-small">Nenhuma atividade cadastrada nessa data.</p>
      </div>

      {/*Dias*/}
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
          <span className="text-sx text-zinc-500">Domingo</span>
        </div>

        {/*Item_do_Dia*/}
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">Academia em grupo</span>
            <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
          </div>
        </div>

        {/*Item_do_Dia*/}
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">Academia em grupo</span>
            <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
