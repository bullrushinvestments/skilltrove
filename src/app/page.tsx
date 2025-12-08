import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillTrove',
  description: 'A subscription-based platform that curates personalized learning modules for professionals in niche industries, utilizing AI to analyze user preferences and deliver targeted educational content.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillTrove</h1>
      <p className="mt-4 text-lg">A subscription-based platform that curates personalized learning modules for professionals in niche industries, utilizing AI to analyze user preferences and deliver targeted educational content.</p>
    </main>
  )
}
