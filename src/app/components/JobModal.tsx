"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { setApplicationStep, markJobApplied } from "@/store/slices/jobSlice";

export default function JobModal() {
  const dispatch = useDispatch<AppDispatch>();
  const { applicationStep, selectedJob } = useSelector((state: RootState) => state.job);

  if (applicationStep === "initial") return null;

  const modalContent =
    applicationStep === "confirm"
      ? {
          title: "Please Hold",
          message:
            "We will send over your profile for this role. Our vetting team will review your application and if you are a good fit, we will let you know and send your profile over to the company.",
          confirmText: "Confirm",
          cancelText: "Cancel",
        }
      : {
          title: "Successful!",
          message: "Your application has been received successfully. Best of luck!",
          confirmText: "Close",
          cancelText: "Close",
        };

  const handleConfirm = () => {
    if (applicationStep === "confirm") {
      if (selectedJob?.id) {
        dispatch(markJobApplied(String(selectedJob.id)));
      }
      dispatch(setApplicationStep("success"));
    } else {
      dispatch(setApplicationStep("initial"));
    }
  };

  const handleCancel = () => {
    dispatch(setApplicationStep("initial"));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{modalContent.title}</h2>
          <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <p className="mb-4 text-gray-600">{modalContent.message}</p>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleConfirm}
          >
            {modalContent.confirmText}
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={handleCancel}
          >
            {modalContent.cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}
