export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const ALGOLIA_APP_ID = IS_PRODUCTION
    ? 'JLXF5NAV04'
    : '48MGJNGMGL'

export const ALGOLIA_SEARCH_API_KEY = IS_PRODUCTION
    ? 'b30c2b8c6fc22f4f1a7f09844690f940'
    : 'd68305f7568c620b865287096b6e3b43'