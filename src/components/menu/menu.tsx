import Link from "next/link";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/accessibility">Accessibility</Link>
        </li>
        <li>
          <Link href="/speaker">Speaker</Link>
        </li>
        <li>
          <Link href="/mentoring">Mentoring</Link>
        </li>
        <li>
          <Link href="/comunidad">Comunidad</Link>
        </li>
      </ul>
    </nav>
  );
}