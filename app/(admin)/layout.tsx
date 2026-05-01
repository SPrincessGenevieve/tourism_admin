import Sidebar from "@/components/Sidebar"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar></Sidebar>
      {children}
    </div>
  )
}
