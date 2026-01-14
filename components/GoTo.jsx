'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function GoTo() {
  const isAuthenticated = false;
  const path = usePathname();
  return (
    <div className='goto'>
      {path == '/' && (
        <>
          <Link href='/dashboard?register=true'>
            <p>Sign Up</p>
          </Link>
          <Link href='/dashboard'>
            <button>Login &rarr;</button>
          </Link>
        </>
      )}
      {isAuthenticated && path == '/dashboard' && <button>Logout</button>}
    </div>
  );
}

export default GoTo;
