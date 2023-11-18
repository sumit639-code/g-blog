import Link from 'next/link';
import React from 'react';

const sidebar = () => {
  return (
    <>
    <div className="allsection">
    <Link href="/Mainpage">Home</Link>
    <Link href="/Mainpage/updates">ItUpdates</Link>
    <Link href="/">Log Out</Link>
    </div>
    </>
  )
}

export default sidebar