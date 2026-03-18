import React, { useState } from "react";
import { useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import BackToTopButton from "@theme/BackToTopButton";
import DocRootLayoutSidebar from "@theme/DocRoot/Layout/Sidebar";
import DocRootLayoutMain from "@theme/DocRoot/Layout/Main";

export default function DocRootLayout({ children }) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);

  return (
    <div className="flex flex-1 justify-center">
      <BackToTopButton />
      <div className="flex w-full max-w-[calc(92rem+3rem)] px-6 max-[996px]:px-4">
        {sidebar && (
          <DocRootLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocRootLayoutMain>
      </div>
    </div>
  );
}
