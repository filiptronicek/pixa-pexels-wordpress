

class ImageService  {

	constructor ( providers = [] ) {
		this.providers = providers.length > 0 ? providers : [
			{
				name: 'Pixabay',
				url: 'https://pixabay.com/api/?key=17240057-89cee718a24862dfe57e1a01f&safesearch=true',
				paramQuery: 'q',
				paramPage: 'page',
				transform: ( pixabayImagesObject ) => {
					return pixabayImagesObject.hits.map( ( pixabayImageObject ) => {
						return {
							url: pixabayImageObject.largeImageURL
						};
					} );
				}
			},
			{
				name: 'Unsplash',
				url: 'https://api.unsplash.com/search/photos?client_id=dk6feFLrhzpPSicZlGgR55tHuOS_qkfJDH6Jo8XYP_8&content_filter=high',
				paramQuery: 'query',
				paramPage: 'page',
				transform: ( unsplashImagesObject ) => {
					return unsplashImagesObject.results.map( ( unsplashImageObject ) => {
						return {
							url: unsplashImageObject.urls.raw
						};
					} );
				}
			}
		];
	}

	search ( query, resolve, page=1, providerNames=[], per_page=10 ) {
		const requestedProviderNames = [];
		this.providers.map( ( provider ) => {

			if ( providerNames.indexOf( provider.name ) > -1 ) {
				const q = encodeURIComponent( query );
				requestedProviderNames.push( provider.name );

				const paginationParams = '';
				if ( provider.paramLimit && provider.paramLimit != null ) {
					const offset = per_page*( page-1 );
					const paginationParams = `${provider.paramLimit}=${per_page}&${provider.paramOffset}=${offset}`;
				} else {
					const paginationParams = `${provider.paramPage}=${page}`;
				}

				const url = `${provider.url}&${provider.paramQuery}=${q}&${paginationParams}`;

				fetch( url )
					.then( res => res.json() )
					.then(
						( result ) => {
							const results = provider.transform( result );
							resolve( provider.name, results );
						},
						( _error ) => { resolve( provider, null ); }
					);
			}
		} );
		return requestedProviderNames;
	}

}
export default ImageService;
