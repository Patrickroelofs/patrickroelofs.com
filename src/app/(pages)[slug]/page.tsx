import { type ReactElement } from 'react'
import { draftMode } from 'next/headers'
import { type Metadata } from 'next'
import { type Page as PageType } from '@/payload-types'
import { PageTemplate } from '@/app/(pages)[slug]/page.template'
import { payload } from '@/util/getPayloadConfig'

async function Page({ params }: { params: Promise<{ slug: string }> }): Promise<ReactElement> {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home' } = await params

  let page: PageType | null = null

  try {
    page = await payload
      .find({
        collection: 'pages',
        draft,
        where: {
          slug: {
            equals: slug,
          },
        },
        limit: 1,
      })
      .then((result) => {
        if (result.docs.length === 0) {
          return null
        }

        return result.docs[0] ?? null
      })

    if (!page) return <p>404</p>

    return <PageTemplate page={page} />
  } catch (error) {
    console.error(error)
    return <p>500</p>
  }
}

export async function generateStaticParams(): Promise<unknown> {
  try {
    const pages = await payload
      .find({
        collection: 'pages',
      })
      .then((result) => {
        if (result.docs.length === 0) {
          return null
        }

        return result.docs
      })

    if (!pages) {
      return {
        paths: [],
      }
    }

    return pages.map((page) => ({
      params: {
        slug: page.slug,
      },
    }))
  } catch (error) {
    console.error(error)
    return {
      paths: [],
    }
  }
}

export function generateMetadata(): Metadata {
  return {}
}

export default Page