import prismadb from "@/lib/prismadb"
import { BillboardForm } from "./components/billboardForm"

// @\app\(dashboard)\[storeId]\(routes)\billboards\[billboardId]\page.tsx
export default async function BillboardPage({
  params
}: {
  params: { billboardId: string }
}) {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId
    }
  })
  return(
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  )
}