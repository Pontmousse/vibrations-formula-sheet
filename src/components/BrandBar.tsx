"use client";

import { assetPath } from "@/lib/features";

export function BrandBar() {
  return (
    <div className="border-b border-black/10 bg-york-red">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-2.5 sm:px-6 sm:py-3">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex h-14 items-center overflow-hidden bg-york-red sm:h-16">
            <img
              src={assetPath("/yu.jpg")}
              alt="York University"
              className="h-[130%] w-auto max-w-none object-cover object-left mix-blend-lighten"
            />
          </div>
          <div className="hidden h-9 w-px bg-white/25 sm:block" />
          <img
            src={assetPath("/lassonde.png")}
            alt="Lassonde School of Engineering"
            className="h-11 w-auto rounded-md bg-white px-2.5 py-1.5 object-contain sm:h-12"
          />
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-sm">
            Department of Mechanical Engineering
          </p>
          <p className="text-[11px] text-white/75 sm:text-xs">MECH 4502 · Vibrations</p>
        </div>
      </div>
    </div>
  );
}
