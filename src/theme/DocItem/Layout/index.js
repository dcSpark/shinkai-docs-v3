import React from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc, useSidebarBreadcrumbs } from "@docusaurus/plugin-content-docs/client";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import ContentVisibility from "@theme/ContentVisibility";
import ApiOperation from "../../../components/ApiOperation";

function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    canRender,
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const { metadata } = useDoc();
  const breadcrumbs = useSidebarBreadcrumbs();
  const eyebrow = breadcrumbs?.[0]?.label;
  const hasDesktopToc = Boolean(docTOC.desktop);

  return (
    <div
      className={clsx(
        "row mx-auto max-w-[calc(var(--shinkai-shell-max-width)-48px)] gap-10 pl-4",
        !hasDesktopToc && "justify-center",
      )}
    >
        <div className={clsx("col", hasDesktopToc ? "shinkai-docItemCol" : "col--12")}>
          <ContentVisibility metadata={metadata} />
          <DocVersionBanner />
          <div className="shinkai-docItemContainer mx-auto max-w-[860px] px-0 pt-[38px] pb-[120px] max-[996px]:pt-[30px] max-[996px]:pb-[54px]">
            <article className="text-[1.03rem]">
              {eyebrow ? (
                <div className="mb-1.5 text-[0.95rem] font-bold text-[var(--ifm-color-primary)]">
                  {eyebrow}
                </div>
              ) : null}
              <DocVersionBadge />
              {docTOC.mobile}
              <div className="shinkai-docTypography prose prose-neutral max-w-none prose-headings:font-extrabold prose-headings:tracking-[-0.03em] prose-headings:text-[#241f1f] prose-p:text-[#4d4646] prose-p:leading-[1.8] prose-li:text-[#4d4646] prose-li:leading-[1.8] prose-a:text-[var(--ifm-link-color)] prose-a:no-underline hover:prose-a:text-[var(--ifm-link-color)] prose-strong:text-[#241f1f] prose-code:text-inherit prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0 prose-pre:shadow-none prose-img:rounded-none dark:prose-invert dark:prose-headings:text-[#f3eded] dark:prose-p:text-[#c9c1c1] dark:prose-li:text-[#c9c1c1] dark:prose-strong:text-[#f3eded]">
                <DocItemContent>{children}</DocItemContent>
              </div>
              <ApiOperation />
              <DocItemFooter />
            </article>
            <DocItemPaginator />
          </div>
        </div>
        {docTOC.desktop && <div className="shinkai-docTocCol col col--3 max-w-[260px]">{docTOC.desktop}</div>}
      </div>
  );
}
