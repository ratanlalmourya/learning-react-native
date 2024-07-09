
const GEOAPIFY_API_KEY = 'dce24109d85b45fa861e8e438e5efb45';
export function getMapPreview(lat,lng) {
    
    let imagePreviewUrl =   `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${lng},${lat}&zoom=14&marker=lonlat:${lng},${lat};type:material;color:%23ff3421;icontype:awesome&apiKey=${GEOAPIFY_API_KEY}`
    
    return imagePreviewUrl;

}

export async function getAddress(lat,lng) {
    const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${GEOAPIFY_API_KEY}`;
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Failed to fetch address');
    }

    const data = await response.json();
    const address = data.features[0].properties.formatted;
    return address;
}
