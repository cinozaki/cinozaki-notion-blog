import Link from 'next/link'
import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      <span>
        blog.cinozaki.com{' '}
        <small>by</small>{' '}
        <ExtLink
          href="https://twitter.com/cinozaki"
        >
          @cinozaki
        </ExtLink>
        {' '}
      </span>
      <span>
      {' '}<small>&</small>{' '}<small>Powered by</small>{' '}
        <ExtLink
          href="https://github.com/ijjk/notion-blog/"
        >
          Notion Blog
          </ExtLink>
        .
      </span>
    </footer>
  </>
)
