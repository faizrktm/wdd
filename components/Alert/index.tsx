export default function Alert({ message }: {message: string}) {
  return (
    <div className="flex flex-col bg-red-700 px-4 py-2 w-full rounded mb-4">
      <p className="text-sm text-white">{message}</p>
    </div>
  )
}
