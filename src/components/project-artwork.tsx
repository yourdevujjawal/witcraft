import type { Project } from "@/lib/projects";

export function ProjectArtwork({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={`project-artwork artwork-${project.accent} ${large ? "project-artwork-large" : ""}`} aria-hidden="true">
      <div className="artwork-topline">
        <span>W / {project.number}</span>
        <span>{project.year}</span>
      </div>
      {project.slug === "truerdp" ? (
        <div className="rdp-window">
          <div className="window-bar"><i /><i /><i /><span>workspace / overview</span></div>
          <div className="rdp-layout">
            <div className="rdp-sidebar"><b /><i /><i /><i /><i /></div>
            <div className="rdp-main">
              <div className="rdp-kicker">YOUR WORKSPACE</div>
              <div className="rdp-title">Everything<br />in one place.</div>
              <div className="rdp-cards"><i /><i /><i /></div>
              <div className="rdp-chart"><span /><span /><span /><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
      ) : project.slug === "devkit-forge" ? (
        <div className="code-window">
          <div className="window-bar"><i /><i /><i /><span>import.pipeline.ts</span></div>
          <div className="code-lines">
            <p><b>01</b> <em>const</em> pipeline = createImport()</p>
            <p><b>02</b> &nbsp; .mapHeaders(schema)</p>
            <p><b>03</b> &nbsp; .validate(records)</p>
            <p><b>04</b> &nbsp; .reportErrors()</p>
            <p><b>05</b> <strong>await</strong> pipeline.run()</p>
          </div>
          <div className="code-status"><span /> pipeline ready <small>typescript</small></div>
        </div>
      ) : (
        <div className="finance-window">
          <div className="finance-head"><span>MONTHLY OVERVIEW</span><b>•••</b></div>
          <div className="finance-total">₹ 48,250<span>Tracked spending</span></div>
          <div className="finance-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="finance-legend"><i /> Needs <i /> Wants <i /> Savings</div>
        </div>
      )}
      <div className="artwork-caption">{project.name}<span>— {project.eyebrow}</span></div>
    </div>
  );
}
