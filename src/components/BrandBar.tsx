"use client";

import { assetPath } from "@/lib/features";

export function BrandBar() {
  return (
    <div className="border-b border-york-red/15 bg-york-red">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <img
            src={assetPath("/logos/york-university.svg")}
            alt="York University"
            className="h-9 w-auto brightness-0 invert sm:h-10"
          />
          <div className="hidden h-8 w-px bg-white/25 sm:block" />
          <img
            src={assetPath("/logos/lassonde.svg")}
            alt="Lassonde School of Engineering"
            className="h-9 w-auto rounded-md bg-white px-2 py-1 sm:h-10"
          />
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85 sm:text-sm">
            Department of Mechanical Engineering
          </p>
          <p className="text-[11px] text-white/70 sm:text-xs">MECH 4502 · Vibrations</p>
        </div>
      </div>
    </div>
  );
}
