const STATUS_STYLES = {
  Applied: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  Interview: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  Offer: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
  Rejected: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
};

const DOT_STYLES = {
  Applied: "bg-blue-500",
  Interview: "bg-amber-500",
  Offer: "bg-green-500",
  Rejected: "bg-red-500",
};

export default function StatusBadge({ status }) {
  const style =
    STATUS_STYLES[status] ??
    "bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-slate-300";
  const dot = DOT_STYLES[status] ?? "bg-gray-400";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${style}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {status}
    </span>
  );
}
