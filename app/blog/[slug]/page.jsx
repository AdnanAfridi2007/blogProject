import fs from 'fs';
import matter from 'gray-matter';
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug'
import {unified} from 'unified'
import { notFound } from 'next/navigation';
import OnThisPage from '@/components/onThisPage';
export default async function Page({ params }) {
    // const data = {
    //   title: 'Typescript tutorial',
    //   author: "John Doe",
    //   description: "This is a sample data post.",
    //   date: "2023-10-01",
    //   content: "<p>This is the HTML content of the data post.</p>"
    // };

    const filepath = `content/${params.slug}.md`
    if (!fs.existsSync(filepath)){
      notFound()
    }
    const fileContent = fs.readFileSync(filepath, 'utf8');
    const {content, data}=matter(fileContent)

    const processor =  await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, {title: '👋🌍'})
    .use(rehypeAutolinkHeadings)
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(rehypePrettyCode, { theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
     })
    .use(rehypeStringify)
    .process(content)

    const htmlContent = processor.toString();

  
    return (
      <div className="max-w-6xl mx-auto p-6 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="mb-6 border-l-4 border-gray-500 pl-4 italic">{data.description}</p>
        <div className="flex gap-8">
          <p className="mb-2">{data.author}</p>
          <p className="mb-6">{data.date}</p>
        </div>
        <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        <OnThisPage htmlContent={htmlContent} />
      </div>
    );
  }
  