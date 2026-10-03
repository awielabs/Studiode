'use client';

import { useDemo } from '@/context/DemoContext';
import Contact01 from '@/components/demo01/Contact01';
import Contact02 from '@/components/demo02/Contact02';
import Contact03 from '@/components/demo03/Contact03';

export default function ContactPage() {
  const { activeDemo } = useDemo();

  if (activeDemo === 2) return <Contact02 />;
  if (activeDemo === 3) return <Contact03 />;
  return <Contact01 />;
}
