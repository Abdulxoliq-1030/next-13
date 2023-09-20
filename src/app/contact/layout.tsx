import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Page',
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <p>Start Contact</p>
            {children}
            <p>End Contact</p>
        </section>

    )
}
