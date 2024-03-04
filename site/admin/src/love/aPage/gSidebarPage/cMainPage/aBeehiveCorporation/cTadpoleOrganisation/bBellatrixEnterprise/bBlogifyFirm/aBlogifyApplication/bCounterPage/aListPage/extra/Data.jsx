import { Link } from "react-router-dom"
import FinalRouteName from "@/love/gRoute/FinalRouteName"
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button"


const Data = (Redux) => {
  return (
    {
      header: {
        label: "Counter List",
        buttons: [
          {
            label: "Create",
            route: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute
          },
        ]
      },
      component: "List",
      content: {
        list: {
          columns: [
            {
              id: "title",
              header: "Title",
              cell: ({ row }) => (
                <Link to={row.original.retrieve} className="hover:underline">
                  {row.original?.title}
                </Link>
              )
            },
            {
              accessorKey: "status",
              header: "Status",
              cell: ({ row }) => row.getValue("status")
            },
            {
              accessorKey: "createdBy",
              header: "Created By",
              cell: ({ row }) => row.getValue("createdBy")?.eEmail
            },
            {
              accessorKey: "updatedBy",
              header: "Updated By",
              cell: ({ row }) => row.getValue("updatedBy")?.eEmail
            },
            {
              id: "actions",
              enableHiding: false,
              cell: ({ row }) => (
                <div className="flex">
                  <Link to={row.original.retrieve}><Button variant="icon"><Eye className="h-4 w-4" /></Button></Link>
                  <Link to={row.original.update}><Button variant="icon"><Pencil className="h-4 w-4" /></Button></Link>
                  <Link to={row.original.delete}><Button variant="icon"><Trash2 className="h-4 w-4" /></Button></Link>
                </div>
              )
            },
          ],
          data: Redux.state.ReceivedObject?.List

        }
      }
    }
  )
}

export default Data