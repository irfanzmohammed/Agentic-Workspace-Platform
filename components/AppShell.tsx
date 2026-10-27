"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import { SiteHeader } from './SiteHeader';

const AppShell = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
  const isFullScreenRoute = pathname?.startsWith("/workspace/") || pathname?.startsWith("/shared/");

   if (isFullScreenRoute) {
    return <>{children}</>;
  }
  return (
<>
 <SiteHeader />
      <div className="flex flex-1 flex-col pt-18">{children}</div>
</>
  )
}

export default AppShell