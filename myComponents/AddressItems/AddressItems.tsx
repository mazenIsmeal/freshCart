import { DataAddress } from "@/app/profile/page"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AddressItems({item}: {item: DataAddress}) {
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>{item.name || 'Pleas Update this Address'}</CardTitle>
        <CardDescription>
          {item.city || 'Pleas Update this Address'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {item.details || 'Pleas Update this Address'}
        </p>
      </CardContent>
    </Card>
  )
}
