import React from "react";

import ArticleSelect from "@/app/[lang]/components/ArticleSelect";
import environment from "@/environment";
import {APIGet} from "@/app/[lang]/utils/fetch-api";

async function fetchSideMenuData(filter: string) {
  try {
    const categoriesResponse = await APIGet({
          path: "/categories",
          queryParams: {populate: "*"},
        }
    );

    const articlesResponse = await APIGet({
      path: "/articles",
      queryParams: filter ? {
            filters: {
              category: {
                name: filter,
              },
            },
          }
          : {},
    });

    return {
      articles: articlesResponse.data,
      categories: categoriesResponse.data,
    };
  } catch (error) {
    console.error(error);
  }
}

interface Category {
  id: number;
  attributes: {
    name: string;
    slug: string;
    articles: {
      data: Array<{}>;
    };
  };
}

interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
  };
}

interface Data {
  articles: Article[];
  categories: Category[];
}

export default async function LayoutRoute({
  params,
  children,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
    category: string;
  };
}) {
  const { category } = params;
  const { categories, articles } = (await fetchSideMenuData(category)) as Data;

  return (
    <section className="container p-8 mx-auto space-y-6 sm:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
        <div className="col-span-2">{children}</div>
        <aside>
          <ArticleSelect
            categories={categories}
            articles={articles}
            params={params}
          />
        </aside>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const token = environment.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/articles`;

  const articleResponse = await APIGet({
    path: path,
    queryParams: {
      populate: ["category"],
    },
  });

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
