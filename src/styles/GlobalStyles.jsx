/**
 * GlobalStyles component
 * Renders the global CSS reset and font import exactly once at the app root.
 * Nothing else in the project should include a <style> tag.
 */

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&display=swap";

const RESET_CSS = `
  *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
  ::selection { background: #DBEAFE; }
  img, svg { display: block; max-width: 100%; }
  button { font-family: 'Sora', system-ui, sans-serif; }
  input, button { -webkit-appearance: none; }
  a { text-decoration: none; }
`;

export default function GlobalStyles() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link href={FONT_URL} rel="stylesheet" />
      <style>{RESET_CSS}</style>
    </>
  );
}
