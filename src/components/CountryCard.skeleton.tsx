export default function CountryCardSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden h-[328px] bg-white dark:bg-mainDark animate-pulse">
      {" "}
      {/* Fixed height */}
      <div className="w-full h-[188px] bg-gray-300 dark:bg-gray-700"></div>{" "}
      {/* Image skeleton */}
      <div className="p-6 flex flex-col gap-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>{" "}
        {/* Title skeleton */}
        <div className="flex flex-col gap-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>{" "}
          {/* Item 1 skeleton */}
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>{" "}
          {/* Item 2 skeleton */}
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>{" "}
          {/* Item 3 skeleton */}
        </div>
      </div>
    </div>
  );
}
