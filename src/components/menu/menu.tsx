import Link from "next/link";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/me/accessibility">Accessibility</Link>
        </li>
        <li>
          <Link href="/me/speaker">Speaker</Link>
        </li>
        <li>
          <Link href="/me/mentoring">Mentoring</Link>
        </li>
        <li>
          <Link href="/me/comunidad">Comunidad</Link>
        </li>
      </ul>
    </nav>
  );
}