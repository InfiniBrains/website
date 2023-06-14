import LangRedirect from './components/LangRedirect';
import { sectionRenderer } from './utils/section-renderer';
import {APIGet} from "@/app/[lang]/utils/fetch-api";

async function getPageBySlug(slug: string, lang: string) {
    const path = `/pages`;
    const urlParamsObject = { filters: { slug }, locale: lang };
    // const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await APIGet({path:path, queryParams:urlParamsObject});
    return response;
}

export default async function RootRoute({ params }: { params: { lang: string } }) {
    const page = await getPageBySlug('home', params.lang);
    if (page.data.length == 0 && params.lang !== "en") return <LangRedirect />
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}
