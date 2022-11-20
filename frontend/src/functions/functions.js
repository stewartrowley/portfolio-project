export const convertToList = (data) => {
    let imageStructure = []
    data.images_url.forEach(element => {
        imageStructure.push({
            largeURL: element,
            thumbnailURL: element,
            width: 853,
            height: 1280
        })
    });
    console.log(imageStructure)
    return imageStructure;
}