import React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn, popoverContent } from '@openui-org/theme'

export interface Props extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}
export interface Comp extends React.ElementRef<typeof PopoverPrimitive.Content> {}

const PopoverContent = React.forwardRef<Comp, Props>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        popoverContent(),
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = 'PopoverContent'

export default PopoverContent