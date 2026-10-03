'use client';

import { useDemo } from '@/context/DemoContext';
import Projects01 from '@/components/demo01/Projects01';
import Projects02 from '@/components/demo02/Projects02';
import Projects03 from '@/components/demo03/Projects03';
import Projects04 from '@/components/demo04/Projects04';

export default function ProjectsPage() {
  const { activeDemo } = useDemo();

  if (activeDemo === 2) return <Projects02 />;
  if (activeDemo === 3) return <Projects03 />;
  if (activeDemo === 4) return <Projects04 />;
  return <Projects01 />;
}
