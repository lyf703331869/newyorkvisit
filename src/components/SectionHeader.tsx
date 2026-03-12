type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

export const SectionHeader = ({ eyebrow, title, subtitle, action }: SectionHeaderProps) => (
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-slate-400 md:text-base">{subtitle}</p>}
    </div>
    {action}
  </div>
);
