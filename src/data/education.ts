import type { EducationEntry } from '../types/education'

export const educationEntries: EducationEntry[] = [
  {
    slug: 'university',
    institution: 'University of Salford, Manchester, UK',
    qualification: "Bachelor's Degree in Computer Science",
    logoUrl: 'https://www.google.com/s2/favicons?domain=salford.ac.uk&sz=128',
    period: '2024 - Present',
    href: 'https://www.salford.ac.uk/',
    academicResults: ['Year 1 average 80.17%', 'Year 2 average 77.3%'],
  },
  {
    slug: 'college',
    institution: 'Feni Govt. College',
    qualification: 'Higher Secondary Certificate',
    logoUrl: '/feni_govt_college.png',
    period: '2019 - 2020',
    href: 'https://fgc.gov.bd/',
    academicResults: ['Grade: A'],
  },
  {
    slug: 'school',
    institution: 'Feni Model High School',
    qualification: 'Secondary School Certificate',
    logoUrl: 'https://www.google.com/s2/favicons?domain=fmhs.edu.bd&sz=128',
    period: '2018',
    href: 'https://fmhs.edu.bd/',
    academicResults: ['Grade: A'],
  },
]