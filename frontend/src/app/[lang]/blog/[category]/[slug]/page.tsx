import Post from '@/app/[lang]/views/post';
import type { Metadata } from 'next';
import environment from "@/environment";
import {APIGet} from "@/app/[lang]/utils/fetch-api";

async function getPostBySlug(slug: string) {
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            cover: { fields: ['url'] },
            authorsBio: { populate: '*' },
            category: { fields: ['name'] },
            blocks: { populate: '*' },
        },
    };

    const response = await APIGet({path, queryParams:urlParamsObject});
    return response;
}

async function getMetaData(slug: string) {

    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        populate: { seo: { populate: '*' } },
    };

    const response = await APIGet({path, queryParams: urlParamsObject});
    return response.data;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const meta = await getMetaData(params.slug);
    const metadata = meta[0].attributes.seo;

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription,
    };
}

export default async function PostRoute({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const data = await getPostBySlug(slug);
    if (data.data.length === 0) return <h2>no post found</h2>;
    return <Post data={data.data[0]} />;
}

export async function generateStaticParams() {
    const path = `/articles`;

    const articleResponse = await APIGet({
            path,
            queryParams:
                {
                    populate: ['category'],
                },
        }
    );

    return articleResponse.data.map(
        (article: {
            attributes: {
                slug: string;
                category: {
                    slug: string;
                };
            };
        }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
    );
}
