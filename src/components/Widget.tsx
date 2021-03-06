import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

//Estado: Variavel, mas no react ele observa essas variáveis e todas as vezes qeu mudam o valor, ele cria a interface daquele componente.

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 violet-500 rounded-full px-3 h-12 flex items-center group">
        <ChatTeardropDots className="w-6 h-6 text-white" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs text-white transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
