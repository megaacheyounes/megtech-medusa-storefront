import React from "react"

type Section = { heading: string; content: string }

const LegalPageTemplate = ({
  title,
  sections,
}: {
  title: string
  sections: Section[]
}) => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="content-container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-ui-fg-base mb-12">{title}</h1>
        <div className="flex flex-col gap-10">
          {sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-semibold text-ui-fg-base mb-4">
                {section.heading}
              </h2>
              <div className="text-ui-fg-subtle leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LegalPageTemplate
