"use client";

import { useEffect } from "react";

declare global {
  interface Window { dataLayer?: Record<string, unknown>[] }
}

export default function EventTracker() {
  useEffect(() => {
    const pageEvent = window.location.pathname === "/digital-growth-team" ? "team_package_view" : null;
    if (pageEvent) window.dataLayer?.push({ event: pageEvent });

    const track = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-event]");
      const eventName = target?.dataset.event;
      if (eventName) window.dataLayer?.push({ event: eventName, link_url: target.getAttribute("href") });
    };
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, []);

  return null;
}
