export interface LegalClause {
  heading: string
  paragraphs: string[]
}

export interface LegalDocument {
  slug: string
  title: string
  lastUpdated: string
  clauses: LegalClause[]
}