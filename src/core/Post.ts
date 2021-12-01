export default class Post {
    private id: string
    private title: string
    private slug: string
    private body: string
    private keywords: string
    private description: string

    constructor(id: string, title: string, slug: string, desc: string) {
        this.id = id
        this.title = title
        this.slug = slug
        this.description = desc
    }

    get getId() {
        return this.id
    }

    get getTitle() {
        return this.title
    }

    get getSlug() {
        return this.slug
    }

    get getBody() {
        return this.body
    }
    set setBody(body: string) {
        this.body = body
    }

    get getKeywords() {
        return this.keywords
    }
    set setKeywords(keys: string) {
        this.keywords = keys
    }

    get getDescription() {
        return this.description
    }
    set setDescription(d: string) {
        this.description = d
    }
}