import { ProductWithTotalPrice } from '@/helpers/product'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { DiscountBadge } from './discountBadge'
import { ProductPrice } from './productBasePrice'

interface ProductItemProps {
  product: ProductWithTotalPrice
  className?: string
}

export function ProductItem({ product, className }: ProductItemProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn('flex min-w-[156px] flex-col gap-4', className)}
    >
      <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          alt={product.name}
        />

        {product.discountPercent > 0 && (
          <DiscountBadge className="absolute left-3 top-3">
            {product.discountPercent}
          </DiscountBadge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="truncate text-sm">{product.name}</p>

        <div className="flex items-center gap-2 ">
          {product.discountPercent > 0 ? (
            <>
              <ProductPrice
                price={product.totalPrice}
                className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold"
              />
              <ProductPrice
                price={Number(product.basePrice)}
                className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75"
              />
            </>
          ) : (
            <ProductPrice
              price={Number(product.basePrice)}
              className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold"
            />
          )}
        </div>
      </div>
    </Link>
  )
}
