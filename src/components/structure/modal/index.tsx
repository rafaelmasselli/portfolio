import React, { ReactNode } from "react";

interface PropsModal {
  title: string;
  content: ReactNode;
  css: string;
  titleBtn: string;
}

export default function Modal({
  content,
  title,
  css,
  titleBtn,
  ...props
}: PropsModal) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        {...props}
        className={`bg-neutral-700 text-white font-semibold uppercase text-sm px-6 py-3 rounded-md shadow-md hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 transition-all duration-300 ${css}`}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {titleBtn}
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl relative max-w-md w-full">
                <div className="flex items-center justify-between p-6 bg-gray-100 border-b">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <button
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-lg font-bold">✕</span>
                  </button>
                </div>
                <div className="p-6">{content}</div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
    </>
  );
}
