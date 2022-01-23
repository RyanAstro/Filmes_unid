const configApi = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: 'e40eac17a6b9017e960611b2086dfe5c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default configApi;