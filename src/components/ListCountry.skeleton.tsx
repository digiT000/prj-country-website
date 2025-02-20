import CountryCardSkeleton from "./CountryCard.skeleton";

interface SkeletonNumber {
  length: number;
}

export default function CountrySkeleton({ length }: SkeletonNumber) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-10 px-4">
      {Array.from({ length: length }, (_, i) => (
        <CountryCardSkeleton key={i} />
      ))}
    </div>
  );
}
