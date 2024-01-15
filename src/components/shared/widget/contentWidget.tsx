import { useState } from "react";
import { CloseButton } from "./closeButton";
import { WidgetProps } from "../../../interface/widget";
export function ContentWidget({ setDarkMod, darkMod }: WidgetProps) {
  const [tensorFlowEnabled, setTensorFlowEnabled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMod(!darkMod);
  };

  const toggleTensorFlow = () => {
    setTensorFlowEnabled(!tensorFlowEnabled);
  };

  return (
    <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        ></button>
        <span className="text-xl leading-6 flex items-center gap-2 text-white">
          Configurações
        </span>
        <CloseButton />
      </header>
      <div className="w-[190px] h-[100px]">
        <div className="mt-5 ml-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={darkMod}
              onChange={toggleDarkMode}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-ose-700 dark:peer-focus:ring-yellow-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-rose-700"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Dark mode
            </span>
          </label>
        </div>
        <div className="mt-2 ml-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={tensorFlowEnabled}
              onChange={toggleTensorFlow}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-yellow-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-rose-700"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              TensorFlow
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
