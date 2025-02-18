/** @format */

import React from "react";

import { motion } from "framer-motion";

function Status() {
  return (
    <motion.div
      className="absolute top-0 left-0 h-full rounded-full bg-blue-500"
      initial={{ width: "100%" }}
      animate={{ width: "0%" }}
      transition={{ duration: 5 }}
    />
  );
}

export default Status;
