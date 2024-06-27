
const GEOAPIFY_API_KEY = 'dce24109d85b45fa861e8e438e5efb45';
function getMapPreview(lat,lng) {
    
    let imagePreviewUrl =   `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${lng},${lat}&zoom=14&marker=lonlat:${lng},${lat};type:material;color:%23ff3421;icontype:awesome&apiKey=${GEOAPIFY_API_KEY}`
    
    return imagePreviewUrl;

}

export default getMapPreview;