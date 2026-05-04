import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar></Sidebar>
      <Header></Header>
      <div className="h-full w-full">
        <div className="h-13 w-full"></div>
        <div className="flex min-h-[94%] w-full flex-col overflow-y-auto bg-blue-50/30 p-4">
          {children}
        </div>
      </div>
    </div>
  )
}
