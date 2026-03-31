import { siteData } from '../../data/siteContent';

export default function V1Home() {
  return (
    <>
      <div className="v1-hero">
        <h1 className="v1-glitch-title">ROBERT CASTO</h1>
        <div className="v1-terminal-prompt">root@robertcas.to:~$</div>
        <h2 className="v1-role-title">IT Operations Leader</h2>
      </div>

      <div className="v1-divider"></div>

      <p className="v1-bio">
        {siteData.bio}
      </p>
    </>
  );
}
