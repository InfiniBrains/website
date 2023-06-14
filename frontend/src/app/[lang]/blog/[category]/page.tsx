import PageHeader from '@/app/[lang]/components/PageHeader';
import BlogList from '@/app/[lang]/views/blog-list';
import environment from "@/environment";
import {APIGet} from "@/app/[lang]/utils/fetch-api";

async function fetchPostsByCategory(filter: string) {
    try {
        const path = `/articles`;
        const urlParamsObject = {
            sort: { createdAt: 'desc' },
            filters: {
                category: {
                    slug: filter,
                },
            },
            populate: {
                cover: { fields: ['url'] },
                category: {
                    populate: '*',
                },
                authorsBio: {
                    populate: '*',
                },
            },
        };

        const responseData = await APIGet({path, queryParams:urlParamsObject});
        return responseData;
    } catch (error) {
        console.error(error);
    }
}

export default async function CategoryRoute({ params }: { params: { category: string } }) {
    const filter = params.category;
    const { data } = await fetchPostsByCategory(filter);

    //TODO: CREATE A COMPONENT FOR THIS
    if (data.length === 0) return <div>Not Posts In this category</div>;

    const { name, description } = data[0]?.attributes.category.data.attributes;

    return (
        <div>
            <PageHeader heading={name} text={description} />
            <BlogList data={data} />
        </div>
    );
}

export async function generateStaticParams() {
    return [];
}
