"use client";

import { assetPath } from "@/lib/features";

export function BrandBar() {
  return (
    <div className="border-b border-black/10 bg-york-red">
      <div className="mx-auto max-w-[1440px] px-4 py-3 sm:px-6 sm:py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          {/* Logos */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <div className="flex h-11 w-[108px] shrink-0 items-center justify-start overflow-hidden bg-york-red sm:h-12 sm:w-[124px]">
              <img
                src={assetPath("/yu.jpg")}
                alt="York University"
                className="h-full w-auto min-w-full object-cover object-left mix-blend-lighten"
              />
            </div>
            <div className="hidden h-8 w-px shrink-0 bg-white/20 sm:block" />
            <img
              src={assetPath("/lassonde.png")}
              alt="Lassonde School of Engineering"
              className="h-9 w-auto shrink-0 rounded-md bg-white px-2 py-1 object-contain sm:h-10 sm:px-2.5 sm:py-1.5"
            />
          </div>

          {/* Department label */}
          <div className="min-w-0 sm:text-right">
            <p className="text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/90 sm:text-xs">
              Department of Mechanical Engineering
            </p>
            <p className="mt-0.5 text-[11px] text-white/75 sm:text-xs">MECH 4502 · Vibrations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
