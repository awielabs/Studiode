'use client';

import { useDemo } from '@/context/DemoContext';
import About01 from '@/components/demo01/About01';
import About02 from '@/components/demo02/About02';
import About03 from '@/components/demo03/About03';
import About04 from '@/components/demo04/About04';
import About05 from '@/components/demo05/About05';
import AboutFinal from '@/components/final/AboutFinal';

export default function AboutPage() {
  const { activeDemo } = useDemo();

  if (activeDemo === 'final') return <AboutFinal />;
  if (activeDemo === 2) return <About02 />;
  if (activeDemo === 3) return <About03 />;
  if (activeDemo === 4) return <About04 />;
  if (activeDemo === 5) return <About05 />;
  return <About01 />;
}
