export default function CountryDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 items-center">
      {/* Image Skeleton */}
      <div className="aspect-3/2 w-full rounded-2xl bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

      {/* Details Skeleton */}
      <div className="flex flex-col gap-10">
        {/* Title Skeleton */}
        <div className="w-3/4 h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>

        {/* Details Grid Skeleton */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Left Column Skeleton */}
          <div className="flex flex-col gap-4">
            {/* Country Item Skeletons */}
            <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          </div>

          {/* Right Column Skeleton */}
          <div className="flex flex-col gap-4">
            {/* Country Item Skeletons */}
            <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          </div>
        </div>

        {/* Border Countries Skeleton */}
        <div className="flex flex-col md:flex-row gap-2 md:items-center">
          <div className="w-1/4 h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="flex gap-2 flex-wrap">
            {/* Chip Skeletons */}
            <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
