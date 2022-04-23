export function TextCenter ({ children, className }:{children: string, className?:string}) {
  return <p className={'text-center ' + className}>{children}</p>
}
