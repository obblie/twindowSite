import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const problems = [
  "Mirroring a full display leaks everything",
  "Extended desktop does not duplicate windows",
  "Screen sharing tools are not second-monitor tools"
];

export function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="section-wrap">
      <SectionHeading
        kicker="Problem / Solution"
        title="When you mirror a whole display, you lose control."
        description="Twindow duplicates only what you choose, so your second monitor stays useful while your private desktop stays private."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {problems.map((problem, index) => (
          <Reveal key={problem} delay={index * 0.04} className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Problem {index + 1}</p>
            <p className="mt-3 text-sm text-muted">{problem}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="card-surface mt-6 p-7 md:p-9" delay={0.1}>
        <p className="kicker">Solution</p>
        <p className="mt-4 text-2xl font-semibold md:text-3xl">Twindow duplicates only what you choose.</p>
      </Reveal>
    </section>
  );
}
