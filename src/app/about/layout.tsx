import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Page',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <p>Start About</p>
            {children}
            <p>End About</p>
        </section>

    )
}
