import { z } from 'zod';

const ArticleSchema = z.object({
    featured: z.boolean({
        required_error: 'featured is required',
        invalid_type_error: 'featured must be a boolean'
    }),
    title: z.string({
        required_error: 'title is required',
        invalid_type_error: 'title must be a string'
    }),
    url: z.string({
        required_error: 'url is required',
        invalid_type_error: 'url must be a string'
    }),
    imageUrl: z.string({
        required_error: 'imageUrl is required',
        invalid_type_error: 'imageUrl must be a string'
    }),
    newsSite: z.string({
        required_error: 'newsSite is required',
        invalid_type_error: 'newsSite must be a string'
    }),
    summary: z.string({
        required_error: 'summary is required',
        invalid_type_error: 'summary must be a string'
    }),
    publishedAt: z.string({
        required_error: 'publishedAt is required',
        invalid_type_error: 'publishedAt must be a string'
    }),
    launches: z.array(z.object({
        id: z.string({
            required_error: 'id is required',
            invalid_type_error: 'id must be a string'
        }),
        provider: z.string({
            required_error: 'provider is required',
            invalid_type_error: 'provider must be a string'
        })
    })),
    events: z.array(z.object({
        id: z.string({
            required_error: 'id is required',
            invalid_type_error: 'id must be a string'
        }),
        provider: z.string({
            required_error: 'provider is required',
            invalid_type_error: 'provider must be a string'
        })
    })),
})

type Article = z.infer<typeof ArticleSchema>;

export { Article, ArticleSchema};