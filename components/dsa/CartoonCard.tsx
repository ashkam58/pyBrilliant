"use client";
import React from "react";


export default function CartoonCard({
title,
emoji = "📚",
children,
subtitle,
}: {
title: string;
emoji?: string;
subtitle?: string;
children: React.ReactNode;
}) {
return (
<div className="relative overflow-hidden rounded-3xl p-5 sm:p-6 shadow-xl border bg-gradient-to-br from-fuchsia-50 via-white to-cyan-50">
<div className="absolute -top-8 -right-8 text-7xl opacity-20 select-none">{emoji}</div>
<h3 className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
<span className="text-2xl sm:text-3xl">{emoji}</span>
<span>{title}</span>
</h3>
{subtitle ? (
<p className="text-sm text-slate-600 mb-3">{subtitle}</p>
) : null}
<div className="prose prose-sm sm:prose-base max-w-none">{children}</div>
</div>
);
}