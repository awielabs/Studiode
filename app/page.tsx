'use client';

import { useDemo } from '@/context/DemoContext';
import Home01 from '@/components/demo01/Home01';
import Home02 from '@/components/demo02/Home02';
import Home03 from '@/components/demo03/Home03';
import Home04 from '@/components/demo04/Home04';

export default function HomePage() {
  const { activeDemo } = useDemo();

  if (activeDemo === 2) return <Home02 />;
  if (activeDemo === 3) return <Home03 />;
  if (activeDemo === 4) return <Home04 />;
  return <Home01 />;
}
