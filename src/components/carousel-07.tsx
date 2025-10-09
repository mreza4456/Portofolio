"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface CarouselWithFooterProps {
  images: { image: string }[];
  /** 
   * Custom Tailwind basis class, e.g. "basis-full", "basis-1/2", "basis-1/3".
   * Default: "basis-full"
   */
  basisClass?: string;
  /**
   * Custom number of dots (pagination indicators)
   * Default: same as number of images
   */
  customDotsCount?: number;
}

export default function CarouselWithFooter({
  images,
  basisClass = "basis-full",
  customDotsCount,
}: CarouselWithFooterProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const dotsCount = customDotsCount ?? images.length;

  return (
    <div className="mx-auto w-full">
      {/* === Carousel === */}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index} className={basisClass}>
              <Card className="border-0 overflow-hidden bg-transparent">
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <Image
                    src={item.image}
                    alt={`Project image ${index + 1}`}
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0 cursor-pointer" />
        <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full cursor-pointer" />
      </Carousel>

      {/* === Customizable Dots === */}
      <div className="mt-4 flex items-center justify-end gap-2">
        {Array.from({ length: dotsCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-3.5 w-3.5 rounded-full border-2 border-primary/50 transition-all duration-300",
              {
                "bg-primary border-primary scale-110": current === index + 1,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
}
