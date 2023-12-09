import React, { useEffect, useState } from "react";
import HandGestureFactory from "../../../gesture/factories/handGestureFactory";
export function Widget() {
  const [camTensorFlow] = useState(false);

  async function inicializeTensorFlow() {
    await HandGestureFactory.initialize();
  }

  useEffect(() => {
    if (camTensorFlow) {
      inicializeTensorFlow();
    }
  }, []);
  return (
    <div>
      <h5>widget</h5>
    </div>
  );
}
