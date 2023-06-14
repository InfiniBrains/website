export default {
    NEXT_PUBLIC_PAGE_LIMIT: process.env.NEXT_PUBLIC_PAGE_LIMIT || 6,
    NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN: process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN || 'your-form-submission-token',
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://strapi.infinibrains.com' // 'http://127.0.0.1:1337'
}