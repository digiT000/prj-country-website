interface ItemLabel {
  label: string;
  value: string | number;
}

export default function CountryItem({ label, value }: ItemLabel) {
  return (
    <p className="text-sm text-secondaryDark dark:text-neutral-100">
      <span className="font-semibold">{label}:</span>{" "}
      <span className="font-light">{value}</span>
    </p>
  );
}
