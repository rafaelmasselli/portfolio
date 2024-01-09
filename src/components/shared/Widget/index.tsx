import { Gear } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { ContentWidget } from "./contentWidget";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <ContentWidget />
      </Popover.Panel>
      <Popover.Button className="bg-rose-900 rounded-full px-3 h-12  text-white flex items-center group">
        <Gear className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Configurações
        </span>
      </Popover.Button>
    </Popover>
  );
}
