interface SectionLabelProps {
  number: string;
  title: string;
}

export default function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className="typewriter-label" style={{ marginBottom: '16px' }}>
      {number} <span style={{ opacity: 0.4 }}>/</span> {title}
    </div>
  );
}
