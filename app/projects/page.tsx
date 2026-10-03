'use client';

import { useDemo } from '@/context/DemoContext';
import Projects01 from '@/components/demo01/Projects01';
import Projects02 from '@/components/demo02/Projects02';
import Projects03 from '@/components/demo03/Projects03';

export default function ProjectsPage() {
  const { activeDemo } = useDemo();

  if (activeDemo === 2) return <Projects02 />;
  if (activeDemo === 3) return <Projects03 />;
  return <Projects01 />;
}
