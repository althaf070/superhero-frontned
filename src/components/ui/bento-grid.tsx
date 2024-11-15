import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "ygrid md:yauto-rows-[18rem] ygrid-cols-1 md:ygrid-cols-3 ygap-4 ymax-w-7xl ymx-auto y",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "yrow-span-1 yrounded-xl ygroup/bento hover:yshadow-xl ytransition yduration-200 yshadow-input dark:yshadow-none yp-4 dark:ybg-black dark:yborder-white/[0.2] ybg-white yborder yborder-transparent yjustify-between yflex yflex-col yspace-y-4",
        className
      )}
    >
      {header}
      <div className="ygroup-hover/bento:translate-x-2 ytransition yduration-200">
        {icon}
        <div className="yfont-sans yfont-bold ytext-neutral-600 dark:ytext-neutral-200 ymb-2 ymt-2">
          {title}
        </div>
        <div className="yfont-sans yfont-normal ytext-neutral-600 ytext-xs dark:ytext-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
