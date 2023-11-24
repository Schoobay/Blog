"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const posts = () => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      {currentPath} + {searchParams}
    </div>
  );
};

export default posts;
