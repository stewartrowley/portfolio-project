export const convertToListVertical = (data) => {
    let imageStructure = []
    data.images_url[0].vertical_images.forEach((element) => {
        imageStructure.push(element)
    });
    return imageStructure;
}

export const convertToListHorizontal = (data) => {

    let imageStructure = []
    data.images_url[0].horizontal_images.forEach((element) => {

        imageStructure.push(element)
    })

    console.log(imageStructure)

    return imageStructure;
}