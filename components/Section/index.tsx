import { ReactNode } from "react";

export default function Section({children, className}: {children: ReactNode, className?: string}){
  return <div className={(className || '') + ' flex flex-col py-8 px-4 lg:px-12'}>{children}</div>
}
